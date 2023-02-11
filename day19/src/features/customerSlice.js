import {createSlice} from "@reduxjs/toolkit";



const initialState = {
  value: []
}

export const customerSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {
        addCustomer: (state, action) => {
          state.value.push(action.payload)
        }
    }
})

export const {addCustomer} = customerSlice.actions;

export default customerSlice.reducer

