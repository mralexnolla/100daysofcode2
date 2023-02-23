import React, { useEffect } from 'react'
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import { useSelector, useDispatch  } from 'react-redux';
import { calculateTotals } from './features/cart/cartSlice';
import Modal from './components/Modal';


function App() {
  
  const {cartItems} = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const {isOpen} = useSelector((store) => store.modal)

  useEffect(() => {
    dispatch(calculateTotals())
  },[cartItems])

  return (
    <div className="App">
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </div>
  );
}

export default App;
