import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    value: []
}

export const reservationSlice = createSlice({
    name: "reservations",
    initialState,
    reducers: {
        addReservation: (state, action) => {
            state.value.push(action.payload)
        }
    }
})



export const {addReservation} =  reservationSlice.actions

export default reservationSlice.reducer;