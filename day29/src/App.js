import React, { useEffect } from 'react'
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import { useSelector, useDispatch  } from 'react-redux';
import { calculateTotals } from './features/cart/cartSlice';


function App() {
  
  const {cartItems} = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals())
  },[cartItems])

  return (
    <div className="App">
      <Navbar />
      <CartContainer />
    </div>
  );
}

export default App;
