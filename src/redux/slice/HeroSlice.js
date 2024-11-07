import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  hero: [],
};

const HEROS = "http://localhost:3000/hero";

export const fetchHero = createAsyncThunk("hero/fetchHero", async () => {
  try {
    const response = await axios.get(HEROS);
    return [...response.data];
  } catch (error) {
    return error.message;
  }
});

export const heroSlice = createSlice({
  name: "hero",
  initialState,
  reducers: {
    postHero: (state, action) => {
      const heroObj = {
        "img": action.payload.img,
        "category": action.payload.category,
        "text": action.payload.text,
        "properties": action.payload.properties
      }
      try {
        axios.post(HEROS, action.payload);
        state.hero = [...state.hero, action.payload];
      } catch (error) {
        console.log(error);
      }
    },
    deleteHero: (state, action) => {
      try {
        axios.delete(HEROS + "/" + action.payload);
        state.hero = state.hero.filter((elem) => elem.id != action.payload);
      } catch (error) {
        console.log(error);
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchHero.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchHero.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.hero = action.payload;
      })
      .addCase(fetchHero.rejected, (state, action) => {
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
  postHero,
  deleteHero,
} = heroSlice.actions;

export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

export default heroSlice.reducer;
