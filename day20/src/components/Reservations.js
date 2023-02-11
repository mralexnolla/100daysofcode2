import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addReservation} from "../features/reservationSlice";
import ReservationCard from './ReservationCard';
import CustomerCard from '../components/CustomerCard';
//import uuid from 'react-uuid';


const Reservations = () => {
    const reservations = useSelector((state) => state.reservations.value);
    const customers = useSelector((state) => state.customers.value);
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
                                reservations.map((name, index) => {
                                    return(
                                        <div key={index}>
                                             <ReservationCard name={name}  index={index}/>
                                        </div>
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
                    {
                        customers.map((customer, index) => {

                            return (
                                <div key={index}>
                                    <CustomerCard id={customer.id} name={customer.name} food={customer.food} />
                                </div>
                            )
                            
                        })
                    }

                </div>

            </div>
        </div>
    )
}

export default Reservations