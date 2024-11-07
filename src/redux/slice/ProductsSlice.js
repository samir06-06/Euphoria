import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  products: [],
  finalProducts: [],
  selectedFilters: {
    categories: [],
    sizes: [],
    color: [],
    style: [],
    price: {
      minValue: [],
      maxValue: [],
    },
    gender: [],
  },
}

const PRODUCTS_URL = "http://localhost:3000/products"

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await axios.get(PRODUCTS_URL)
      return [...response.data]
    } catch (error) {
      return error.message
    }
  }
)

const applyFilters = (products, filters) => {
  return products.filter((product) => {
    const productObject = JSON.parse(JSON.stringify(product))
    return Object.entries(filters).every(([type, value]) => {
      if (type === "price") {
        const { minValue, maxValue } = value
        return (
          (minValue.length === 0 || productObject.price >= minValue) &&
          (maxValue.length === 0 || productObject.price <= maxValue)
        )
      } else if (type === "style") {
        return value.length === 0 || value.includes(productObject.style)
      } else if (type === "gender") {
        return value.length === 0 || value.includes(productObject.gender)
      } else if (Array.isArray(productObject[type])) {
        return (
          value.length === 0 ||
          productObject[type].some((val) => value.includes(val))
        )
      } else {
        return value.length === 0 || value.includes(productObject[type])
      }
    })
  })
}

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterByCategory: (state, action) => {
      const { payload } = action

      const isCategorySelected =
        state.selectedFilters.categories.includes(payload)

      if (state.selectedFilters.categories.length === 8) {
        state.selectedFilters.categories = [payload] // Wrap payload in an array
      } else if (isCategorySelected) {
        state.selectedFilters.categories =
          state.selectedFilters.categories.filter(
            (category) => category !== payload
          )
      } else {
        state.selectedFilters.categories.push(payload)
      }

      state.products = applyFilters(state.finalProducts, state.selectedFilters)
    },
    filterBySize: (state, action) => {
      const { payload } = action

      const isSizeSelected = state.selectedFilters.sizes.includes(payload)

      if (state.selectedFilters.sizes.length === 9) {
        state.selectedFilters.sizes = [payload] // Wrap payload in an array
      } else if (isSizeSelected) {
        state.selectedFilters.sizes = state.selectedFilters.sizes.filter(
          (size) => size !== payload
        )
      } else {
        state.selectedFilters.sizes.push(payload)
      }

      state.products = applyFilters(state.finalProducts, state.selectedFilters)
    },
    searchProduct: (state, action) => {
      if (action.payload.trim() !== "") {
        state.results = state.products.filter((elem) =>
          elem.name.toLowerCase().includes(action.payload.toLowerCase())
        )
      } else {
        state.results = []
      }
    },
    filterByColor: (state, action) => {
      const { payload } = action

      const isColorSelected = state.selectedFilters.color.includes(payload)
      if (state.selectedFilters.color.length === 12) {
        state.selectedFilters.color = [payload] // Wrap payload in an array
      } else if (isColorSelected) {
        state.selectedFilters.color = state.selectedFilters.color.filter(
          (color) => color !== payload
        )
      } else {
        state.selectedFilters.color.push(payload)
      }

      state.products = applyFilters(state.finalProducts, state.selectedFilters)
    },
    filterByStyle: (state, action) => {
      const { payload } = action

      const isStyleSelected = state.selectedFilters.style.includes(payload)
      if (state.selectedFilters.style.length === 6) {
        state.selectedFilters.style = [payload] // Wrap payload in an array
      } else if (isStyleSelected) {
        state.selectedFilters.style = state.selectedFilters.style.filter(
          (style) => style !== payload
        )
      } else {
        state.selectedFilters.style.push(payload)
      }

      state.products = applyFilters(state.finalProducts, state.selectedFilters)
    },

    filterByGender: (state, action) => {
      const { payload } = action
      const isGenderSelected = state.selectedFilters.gender.includes(payload)

      if (isGenderSelected) {
        state.selectedFilters.gender = state.selectedFilters.gender.filter(
          (gender) => gender !== payload
        )
      } else {
        state.selectedFilters.gender.push(payload)
      }

      state.products = applyFilters(state.finalProducts, state.selectedFilters)
      console.log(state.selectedFilters.gender)
    },

    maxPriceChange: (state, action) => {
      const { payload } = action
      state.selectedFilters.price.maxValue = payload || 1100 // Update the state

      JSON.parse(JSON.stringify(state.selectedFilters.price))

      state.products = applyFilters(state.finalProducts, state.selectedFilters)
    },
    minPriceChange: (state, action) => {
      const { payload } = action
      state.selectedFilters.price.minValue = payload || 0 // Update the state

      JSON.parse(JSON.stringify(state.selectedFilters.price.minValue))

      state.products = applyFilters(state.finalProducts, state.selectedFilters)
    },
    deleteProduct: (state, action) => {
      try {
        axios.delete(PRODUCTS_URL + "/" + action.payload).then(() => {
          console.log("deleted")
          // state.products = state.products.filter(elem => elem.id !== action.payload)
        })
        state.products = state.products.filter(
          (elem) => elem.id !== action.payload
        )
        // console.log(JSON.stringify(state.products))
      } catch (error) {
        console.log(error)
      }
    },
    postProduct: (state, action) => {
      try {
        axios.post(PRODUCTS_URL, action.payload).then(() => {
          console.log("posted")
          // state.products = state.products.filter(elem => elem.id !== action.payload)
        })
      } catch (error) {
        console.log(error)
      }
    },
    editProduct: (state, action) => {
      try {
        axios
          .patch(PRODUCTS_URL + "/" + action.payload.id, action.payload)
          .then(() => {
            console.log("posted")
            // state.products = state.products.filter(elem => elem.id !== action.payload)
          })
      } catch (error) {
        console.log(error)
      }
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.products = action.payload
        state.finalProducts = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
  },
})

export const {
  filterByCategory,
  filterByColor,
  minPriceChange,
  maxPriceChange,
  filterBySize,
  filterByStyle,
  filterByGender,
  searchProduct,
  deleteProduct,
  postProduct,
  editProduct,
} = productsSlice.actions

export default productsSlice.reducer
