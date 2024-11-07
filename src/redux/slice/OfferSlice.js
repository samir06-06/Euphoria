import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  offers: [],
};

const OFFERS = "http://localhost:3000/offers";

export const fetchOffers = createAsyncThunk("offers/fetchOffers", async () => {
  try {
    const response = await axios.get(OFFERS);
    return [...response.data];
  } catch (error) {
    return error.message;
  }
});



export const offersSlice = createSlice({
  name: "offers",
  initialState,
  reducers: {
    postOffer: (state, action) => {
      const offer = { img: action.payload }
      try {
        axios.post(OFFERS, offer)
        state.offers = [...state.offers, offer]
      } catch (error) {
        console.log(error)
      }
    },
    deleteOffer: (state, action) => {
      try {
        axios.delete(OFFERS + '/' + action.payload)
        state.offers = state.offers.filter(elem => elem.id != action.payload)
      } catch (error) {
        console.log(error)
      }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.offers = action.payload;
      })
      .addCase(fetchOffers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {
  filterByCategory,
  filterByColor,
  filterByPrice,
  filterBySize,
  filterByStyle,
  searchProduct,
  postOffer,
  deleteOffer
} = offersSlice.actions;

export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

export default offersSlice.reducer;
