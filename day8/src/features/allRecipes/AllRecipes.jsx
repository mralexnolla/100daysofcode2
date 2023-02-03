/**Now inside the react u need to import the use selector hook*/
import React, { useEffect } from 'react';
// Implement the import statements below.
import {useSelector} from 'react-redux';

/**Then add the selector  'selectFilteredAllRecipes' */

// Add the selector to the below import statement 
import { loadData, selectFilteredAllRecipes} from './allRecipesSlice.js';
import { addRecipe } from '../favoriteRecipes/favoriteRecipesSlice.js';
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";
const favoriteIconURL = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg';

export const AllRecipes = () => {
  // Implement allRecipes variable below.
  const allRecipes = useSelector(selectFilteredAllRecipes);
  // this is just to load the data. Have to repeate the same steps for adding and removing favorites 
  
  const onFirstRender = () => {
    // dispatch(loadData());
  }
  useEffect(onFirstRender, []);

  const onAddRecipeHandler = (recipe) => {
    // dispatch(addRecipe(recipe));
  };

  return (
    <div className="recipes-container">
      {allRecipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id}>
          <FavoriteButton
            onClickHandler={() => onAddRecipeHandler(recipe)}
            icon={favoriteIconURL}
          >
            Add to Favorites
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  );
};


