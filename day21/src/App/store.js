import {configureStore} from "@reduxjs/toolkit";
import reservationReducer from "../features/reservationSlice";
import customersReducer from "../features/customerSlice";


export const store = configureStore({
    reducer: {
        reservations: reservationReducer,
        customers: customersReducer,
        
    }
})