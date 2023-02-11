import React from 'react';
import {useDispatch} from "react-redux";
import {removeReservation} from '../features/reservationSlice';
import {addCustomer} from '../features/customerSlice'
//import uuid from 'react-uuid'

export default function ReservationCard({name, index}) {
  const dispatch = useDispatch()
  return ( <div 
            onClick={() => {
              dispatch(removeReservation(index));
              dispatch(addCustomer({
                id: index,
                name,
                food: []
              }))
            
            }}
            className="reservation-card-container"
         >
            {name}
         </div>
      )
}
