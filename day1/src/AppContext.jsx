import React, {useContext, useEffect} from 'react';
import axios from 'axios';
import { useState } from 'react';

//import { createContext } from 'react';

export const AppContext = React.createContext();

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

/** geting favorites from local storage */
const getFavoritesFromLocalStorage = () => {
    let favorites = localStorage.getItem('favorites');
    if(favorites){
        favorites = JSON.parse(localStorage.getItem('favorites'));
    }else{
        favorites = [];
    }
    return favorites;
}

const AppContextProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [meals, setMeals] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedMeal, setSelectedMeal] = useState(null);
    const [favorites, setFavorites] = useState(getFavoritesFromLocalStorage());

    const fetchData =  async (url) => {
        setLoading(true)

        try{
            const { data } = await axios(url);   // i used axios to consume the api
            if(data.meals){
                setMeals(data.meals)
            }else{
                setMeals([])
            }
            
        }catch(e){
            console.log(e.response)
        }

        setLoading(false)

    }


    /** favorite  tab */
    const addToFavorites = (idMeal) => {
        
        const alreadyFavorite = favorites.find((meal) => meal.idMeal === idMeal);
        if(alreadyFavorite) return                           //if its already in the favorites then we will just return
        const meal = meals.find((meal) => meal.idMeal === idMeal);
        const updatedFavorites = [...favorites, meal]
        setFavorites(updatedFavorites)   
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites))        
    }

    const removeFromFavorites = (idMeal) => {
        const updatedFavorites = favorites.filter((meal) => meal.idMeal !== idMeal) //return all the id's whose id doesn match the id we are parsing 
        setFavorites(updatedFavorites)
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
    }



    /** selecting a meal and the modal */
    const selectMeal = (idMeal, favoriteMeal) => {
        let meal;
        if(favoriteMeal){
            meal = favorites.find((meal) => meal.idMeal === idMeal)
        }else{
            meal = meals.find((meal) => meal.idMeal === idMeal);
        }
        setSelectedMeal(meal);
        setShowModal(true)

    }

    const closeModal = () => {
        setShowModal(false)
    }

    const fetchRandomMeal = () => {
        fetchData(randomMealUrl)
    }

    useEffect(() => {
        fetchData(allMealsUrl)
    },[])
    
    useEffect(( ) => {
        if(!searchTerm)
            return
                fetchData(`${allMealsUrl}${searchTerm}`)
    }, [searchTerm])

    return ( 
        <AppContext.Provider value={{loading, meals, setSearchTerm, fetchRandomMeal, showModal, selectMeal, selectedMeal, closeModal, favorites, addToFavorites, removeFromFavorites}}>
            {children}
        </AppContext.Provider>
     );
}

// this is a custom hook
export const useGlobalContext = () => {
    return(
       useContext(AppContext)
    )
}
 
export default AppContextProvider;
