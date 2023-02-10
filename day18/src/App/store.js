import {configureStore} from "@reduxjs/toolkit";
import reservationReducer from "../features/reservationSlice"

export const store = configureStore({
    reducer: {
        reservations: reservationReducer
    }
})