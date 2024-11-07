import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  descCategory: 'description',
  adminCategory: '',
  editOpen: false
}

export const interfaceSlice = createSlice({
  name: 'interface',
  initialState,
  reducers: {

    setDescCategory: (state, action) => {
      console.log(action.payload)
      state.descCategory = action.payload
    },
    setAdminCategory: (state, action) => {
      console.log(action.payload)
      state.adminCategory = action.payload
    },
    setEditOpen: (state, action) => {
      console.log(action.payload)
      state.editOpen = action.payload
    },

  },
})

// Action creators are generated for each case reducer function
export const { setDescCategory, setAdminCategory, setEditOpen } = interfaceSlice.actions

export default interfaceSlice.reducer