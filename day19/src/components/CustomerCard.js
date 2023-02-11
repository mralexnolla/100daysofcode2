import React from 'react'
//import uuid from 'react-uuid'

export default function CustomerCard({id, name, food}) {
  return (
        <div className="customer-food-card-container">
        <p>{name}</p>
        <div className="customer-foods-container">
            <div className="customer-food" >
                {
                    food.map(food => {
                        return (
                            <div >
                             <p>{food}</p>
                            </div>
                        )
                        
                    })
                }
            </div>
            <div className="customer-food-input-container">
                <input type="text" />
                <button>Add</button>
            </div>
        </div>
        </div> 
    
  )
}
