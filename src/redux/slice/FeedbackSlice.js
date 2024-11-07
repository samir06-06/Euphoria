import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
const initialState = {
    feedbacks: [],
}

const FEEDBACKS_URL = "http://localhost:3000/feedbacks"

export const fetchFeedbacks = createAsyncThunk(
    "feedbacks/fetchFeedbacks",
    async () => {
        try {
            const response = await axios.get(FEEDBACKS_URL)
            return [...response.data]
        } catch (error) {
            return error.message
        }
    }
)

export const feedbacksSlice = createSlice({
    name: "feedbacks",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(fetchFeedbacks.pending, (state) => {
                state.status = "loading"
            })
            .addCase(fetchFeedbacks.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.feedbacks = action.payload
            })
            .addCase(fetchFeedbacks.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
    },
})

export const {
    filterByCategory,
    filterByColor,
    filterByPrice,
    filterBySize,
    filterByStyle,
    searchProduct
} = feedbacksSlice.actions

export const selectAllPosts = (state) => state.posts.posts
export const getPostsStatus = (state) => state.posts.status
export const getPostsError = (state) => state.posts.error

export default feedbacksSlice.reducer
