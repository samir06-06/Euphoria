import { colors } from "@mui/joy";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: [],
  wishlist: [],
  products: [],
  basket: [],
  status: "idle",
  error: null,
  users: [],
};

const USERS_URL = "http://localhost:3000/users";
const PRODUCTS_URL = "http://localhost:3000/products";

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  try {
    const response = await axios.get(`${USERS_URL}/1`);
    return response.data;
  } catch (error) {
    throw error;
  }
});
export const fetchAllUsers = createAsyncThunk(
  "user/fetchAllUsers",
  async () => {
    try {
      const response = await axios.get(USERS_URL);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchProductsInU = createAsyncThunk(
  "user/fetchProductsInU",
  async () => {
    try {
      const response = await axios.get(PRODUCTS_URL);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchProductsForBasket = createAsyncThunk(
  "user/fetchProductsForBasket",
  async () => {
    try {
      const response = await axios.get(PRODUCTS_URL);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const updateWishlist = createAsyncThunk(
  "user/updateWishlist",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${USERS_URL}/1`);
      const currentUserData = response.data;

      const updatedWishlist = currentUserData.wishlist.includes(id)
        ? currentUserData.wishlist.filter((item) => item !== id)
        : [...currentUserData.wishlist, id];

      console.log("updatedWishlist", updatedWishlist);

      await axios.patch(`${USERS_URL}/1`, { wishlist: updatedWishlist });

      return updatedWishlist;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateBasket = createAsyncThunk(
  "user/updateBasket",
  async (addedObj, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${USERS_URL}/1`);
      const currentUserData = response.data;

      const updatedBasket = currentUserData.basket.find(
        (elem) => elem.id == addedObj.id
      )
        ? currentUserData.basket.filter((item) => item.id !== addedObj.id)
        : [...currentUserData.basket, addedObj];
      await axios.patch(`${USERS_URL}/1`, { basket: updatedBasket });

      return updatedBasket;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateProfile = createAsyncThunk(
  "user/updateProfile",
  async (updateData, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`${USERS_URL}/1`, updateData);
      return response.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    deleteUser: (state, action) => {
      try {
        axios.delete(USERS_URL + "/" + action.payload).then(() => {
          console.log("deleted");
          // state.products = state.products.filter(elem => elem.id !== action.payload)
        });
        state.users = state.users.filter((elem) => elem.id !== action.payload);
        // console.log(JSON.stringify(state.products))
      } catch (error) {
        console.log(error);
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    builder
      .addCase(fetchProductsInU.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsInU.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;

        if (state.user.wishlist) {
          state.wishlist = state.user.wishlist
            .map((wishlistId) => {
              return state.products.find(
                (product) => product.id === wishlistId
              );
            })
            .filter(Boolean);

          console.log("state.wishlist when productssdan", state.wishlist);
        }
      })
      .addCase(fetchProductsInU.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    builder
      .addCase(fetchProductsForBasket.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsForBasket.fulfilled, (state, action) => {
        state.status = "succeeded";
        const allProducts = action.payload;

        if (state.user.basket) {
          state.basket = state.user.basket;
          // .map((basketId) => {
          //   return allProducts.find((product) => product.id === basketId.id);
          // })
          // .filter(Boolean);
        }
      })
      .addCase(fetchProductsForBasket.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    builder
      .addCase(updateWishlist.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateWishlist.fulfilled, (state, action) => {
        state.wishlist = action.payload
          .map((wishlistId) => {
            return state.products.find((product) => product.id === wishlistId);
          })
          .filter(Boolean);
        console.log("state.wishlist  update wishlist deen", state.wishlist);
      })
      .addCase(updateWishlist.rejected, (state, action) => {
        state.error = action.payload;
      });

    builder
      .addCase(updateBasket.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateBasket.fulfilled, (state, action) => {
        state.basket = action.payload;
      })
      .addCase(updateBasket.rejected, (state, action) => {
        state.error = action.payload;
      });

    builder
      .addCase(updateProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.error = action.payload || "Failed to update";
      });
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.error = action.payload || "Failed to update";
      });
  },
});

export const { deleteUser } = userSlice.actions;

export default userSlice.reducer;
