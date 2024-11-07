import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    color: '',
    size: ''
}

export const selectorSlice = createSlice({
    name: 'selector',
    initialState,
    reducers: {
        setColor: (state, action) => {
            state.color = action.payload
            console.log(state.color)
        },
        setSize: (state, action) => {
            state.size = action.payload
            console.log(state.size)
        },


    },
})

// Action creators are generated for each case reducer function
export const { setSize, setColor } = selectorSlice.actions

export default selectorSlice.reducer