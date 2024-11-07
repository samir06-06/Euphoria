import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  addresses: [],
};

const ADDRESSES_URL = "http://localhost:3000/users";
const userId = "1";

export const fetchAddresses = createAsyncThunk(
  "address/fetchAddress",
  async () => {
    try {
      const response = await axios.get(`${ADDRESSES_URL}/${userId}`);
      return [...response.data.address];
    } catch (error) {
      return error.message;
    }
  }
);

export const setDefaultShipping = createAsyncThunk(
  "address/setDefaultShipping",
  async (id, { rejectWithValue }) => {
    try {
      const userData = await axios.get(`${ADDRESSES_URL}/${userId}`);
      const updatedData = userData.data.address.map((item) =>
        item.id == id ? { ...item, default_shipping: true } : item
      );
      const response = await axios.patch(`${ADDRESSES_URL}/${userId}`, {
        address: updatedData,
      });
      return updatedData;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const deleteAddress = createAsyncThunk(
  "address/deleteAddress",
  async (id) => {
    try {
      const userData = await axios.get(`${ADDRESSES_URL}/${userId}`);
      const updatedData = userData.data.address.filter(
        (item) => item.id !== id
      );
      const response = await axios.patch(`${ADDRESSES_URL}/${userId}`, {
        address: updatedData,
      });

      return updatedData;
    } catch (error) {
      return error.message;
    }
  }
);

export const postAddress = createAsyncThunk(
  "address/postAddress",
  async (obj) => {
    try {
      const userResponse = await axios.get(`${ADDRESSES_URL}/${userId}`);
      const currentAddress = userResponse.data.address;
      const updatedAddress = [...currentAddress, { ...obj, id: uuidv4() }];

      const response = await axios.patch(`${ADDRESSES_URL}/${userId}`, {
        address: updatedAddress,
      });
      return updatedAddress;
    } catch (error) {
      return error.message;
    }
  }
);

export const updateAddress = createAsyncThunk(
  "address/updateAddress",
  async (obj, { rejectWithValue }) => {
    try {
      const userData = await axios.get(`${ADDRESSES_URL}/${userId}`);
      const updatedData = userData.data.address.map((item) =>
        item.id == obj.id ? obj : item
      );
      const response = await axios.patch(`${ADDRESSES_URL}/${userId}`, {
        address: updatedData,
      });
      return updatedData;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);
export const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAddresses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAddresses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.addresses = action.payload;
      })
      .addCase(fetchAddresses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    builder
      .addCase(setDefaultShipping.pending, (state) => {
        state.status = "loading";
      })
      .addCase(setDefaultShipping.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.addresses = action.payload;
      })
      .addCase(setDefaultShipping.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
    builder
      .addCase(deleteAddress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteAddress.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.addresses = action.payload;
      })
      .addCase(deleteAddress.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Error deleting address";
      });
    builder
      .addCase(postAddress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postAddress.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.addresses = action.payload;
      })
      .addCase(postAddress.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Error deleting address";
      });
    builder
      .addCase(updateAddress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateAddress.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.addresses = action.payload;
      })
      .addCase(updateAddress.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Error updating address";
      });
  },
});

export const { handleSetDefault } = addressSlice.actions;

export default addressSlice.reducer;
