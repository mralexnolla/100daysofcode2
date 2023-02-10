import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {addReservation} from "../features/reservationSlice"
import ReservationCard from './ReservationCard';
import uuid from 'react-uuid';


const Reservations = () => {
    const reservations = useSelector((state) => state.reservations.value);
    const dispatch = useDispatch();
    const [reservNameInput, setReservNameInput] = useState("");

    const handleAddReservations = (e) => {
       if(!reservNameInput) return;
        dispatch(addReservation(reservNameInput))
        setReservNameInput("")
    }
    
    return(
        <div className="RApp">
            <div className="container">

                <div className="reservation-container">
                    <div>
                        <h5 className="reservation-header">Reservations</h5>
                        <div className="reservation-cards-container">
                            {
                                reservations.map(name => {
                                    return(
                                        <ReservationCard name={name}  key={uuid()}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="reservation-input-container">
                        <input type="text" value={reservNameInput}  onChange={(e) => setReservNameInput(e.target.value)}/>
                        <button onClick={handleAddReservations}>Add</button>
                    </div>
                </div>
                
                <div className="customer-food-container">
                    <div className="customer-food-card-container">
                        <p>Mary Jimoh</p>
                        <div className="customer-foods-container">
                            <div className="customer-food"></div>
                            <div className="customer-food-input-container">
                                <input type="text" />
                                <button>Add</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Reservations