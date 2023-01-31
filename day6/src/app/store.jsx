import { createStore, combineReducers } from 'redux';
import { favoriteRecipesReducer } from '../features/favoriteRecipes/favoriteRecipesSlice.jsx';
import { searchTermReducer } from '../features/searchTerm/searchTermSlice.jsx';
import { allRecipesReducer } from '../features/allRecipes/allRecipesSlice.jsx';


export const store = createStore(combineReducers({
  favoriteRecipes: favoriteRecipesReducer,
  searchTerm: searchTermReducer,
  allRecipes: allRecipesReducer
}));
