import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addFoodToCustomer} from '../features/customerSlice'


export default function CustomerCard({id, name, food}) {
    const dispatch = useDispatch();
    const [customerFoodInput, setCustomerFoodInput] = useState("");

    const handleAddFood = () => {
        if(!customerFoodInput) return
        dispatch(addFoodToCustomer({id, food: customerFoodInput}))
        setCustomerFoodInput("")
    }

  return (
        <div className="customer-food-card-container">
        <p>{name}</p>
        <div className="customer-foods-container">
            <div className="customer-food" >
                {
                    food.map((food, index) => {
                        return (
                            <div key={index}>
                             <p>{food}</p>
                            </div>
                        )
                        
                    })
                }
            </div>
            <div className="customer-food-input-container">
                <input type="text"  value={customerFoodInput} onChange={(e) => setCustomerFoodInput(e.target.value) }/>
                <button onClick={handleAddFood}>Add</button>
            </div>
        </div>
        </div> 
    
  )
}
