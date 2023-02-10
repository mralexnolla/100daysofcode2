import React from 'react'


const Reservations = () => {
    return(
        <div className="RApp">
            <div className="container">
                <div className="reservation-container">
                    <div>
                        <h5 className="reservation-header">Reservations</h5>
                        <div className="reservation-cards-container">
                            <div className="reservation-card-container">Richard Brandt</div>
                        </div>
                    </div>
                    <div className="reservation-input-container">
                        <input type="text" />
                        <button>Add</button>
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