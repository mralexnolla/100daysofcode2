import {createStore, combineReducers} from 'redux';
import { allRecipesReducer } from "../features/allRecipes/allRecipesSLice";
import { favoriteRecipesReducer } from "../features/favoriteRecipes/favoriteRecipesSlice";
import { searchTermReducer } from "../features/searchTerm/searchTermSlice";


const reducers = {
    allRecipes: allRecipesReducer,
    favoriteRecipes: favoriteRecipesReducer,
    searchTerm: searchTermReducer
}

export const store = createStore(combineReducers(reducers));

