import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    custbills: []
}

export const billSlice = createSlice({
    name: 'bill',
    initialState,
    reducers:{
        addBill: (state, action) => {
            const {customerName, items} = action.payload;
            const total = items.reduce((acc, item) => acc + item.totalAmount, 0)
            state.custbills.push({customerName, items, total})
        },
        removeBill: (state, action) => {
            const {customerName} = action.payload
            state.custbills = state.custbills.filter(bill => bill.customerName !== customerName)
        }
    }
})

export const {addBill, removeBill} = billSlice.actions;

export default billSlice.reducer;