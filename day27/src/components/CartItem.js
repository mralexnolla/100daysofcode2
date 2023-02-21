import React from 'react';
import {ChevronUp, ChevronDown} from '../icons'
import { useDispatch } from 'react-redux';
import { removeItem, increase, decrease} from '../features/cart/cartSlice';


const CartItem = ({id, title, price, img, amount}) => {
    const dispatch = useDispatch();
  return (
    <article className="cart-item">
        <img src={img} alt={title}  />
        <div>
            <h4>{title}</h4>
            <h4 className="item-price">{price}</h4>
            {/** remove button */}
            <button 
                className="remove-btn" 
                onClick = {() => {
                dispatch(removeItem(id))
                }
            }
            >
            remove
            </button>
        </div>

        <div>
            {/** increase button */}
            <button className="amount-btn" onClick={() => dispatch(increase({id}))}>
                <ChevronUp />
            </button>

            {/** Amount */}
            <p className="amount">{amount}</p>

            {/** decrease amount */}
            <button className="amount-btn" onClick={() => dispatch(decrease({id}))}>
                <ChevronDown />
            </button>
        </div>
    </article>
  )
}

export default CartItem
