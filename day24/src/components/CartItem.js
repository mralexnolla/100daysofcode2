import React from 'react';
import {ChevronUp, ChevronDown} from '../icons'


const CartItem = ({id, title, price, img, amount}) => {
  return (
    <article className="cart-item">
        <img src={img} alt={title} srcset="" />
        <div>
            <h4>{title}</h4>
            <h4 className="item-price">{price}</h4>
            {/** remove button */}
            <button className="remove-btn">remove</button>
        </div>

        <div>
            {/** increase button */}
            <button className="amount-btn">
                <ChevronUp />
            </button>

            {/** Amount */}
            <p className="amount">{amount}</p>
            
            {/** decrease amount */}
            <button className="amount-btn">
                <ChevronDown />
            </button>
        </div>
    </article>
  )
}

export default CartItem
