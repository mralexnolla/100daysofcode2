import React from 'react'
import { useGlobalContext } from './AppContext';

import Favorites from './components/Favorites';
import Meals from './components/Meals';
import Modal from './components/Modal';
import Search from './components/Search';


function App() {
  const { showModal, favorites } = useGlobalContext()
  return (
    <div className="App"> 
        <Search /> 
        {favorites.length > 0 && <Favorites />}
        <Meals />
        {showModal && <Modal />}  {/** The modal will show only if showModal is true */}
        
     
    </div>
  );
}

export default App;
