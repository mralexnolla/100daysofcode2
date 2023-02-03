import allRecipesData from '../../../data.js'
import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';

export const loadData = () => {
  return {
    type: 'allRecipes/loadData',
    payload: allRecipesData
  }
}
// Pre-loading the data so the application
// outputs something without action dispatching
const initialState = allRecipesData;
export const allRecipesReducer = (allRecipes = initialState, action) => {
  switch (action.type) {
    case 'allRecipes/loadData':
      return action.payload;
    case 'favoriteRecipes/addRecipe':
      return allRecipes.filter(recipe => recipe.id !== action.payload.id);
    case 'favoriteRecipes/removeRecipe':
      return [...allRecipes, action.payload]
    default:
      return allRecipes;
  }
}
// here u need to create selectors. This is how the provider gives access to the store
/**This is just an example in the case of loading all recipes. U can see the ducer and action function */
export const selectAllRecipes = (state) => state.allRecipes;

export const selectFilteredAllRecipes = (state) => {
  const allRecipes = selectAllRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return allRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
