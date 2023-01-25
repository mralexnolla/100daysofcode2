import React from 'react';
import { useGlobalContext } from '../AppContext';

const Favorites = () => {
    const {selectMeal, favorites, removeFromFavorites} = useGlobalContext()
    return ( 
        <section className="favorites">
            <div className="favorites-content">
                <h5>Favorites</h5>
                <div className="favorites-container">
                    {
                        favorites.map((item) => {
                            const {idMeal, strMeal: title,  strMealThumb: image} = item
                            return(
                                <div key={idMeal} className="favorite-item">
                                    <img src={image} alt={title} className='favorites-img img' onClick={() => selectMeal(idMeal, true)}/>
                                    <button className="remove-btn" onClick={() => removeFromFavorites(idMeal)}>remove</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
     );
}
 
export default Favorites;