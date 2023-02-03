
import React, { useEffect } from 'react';
// Add useDispatch to the import statement below.
// first import useDispatch hook from react-redux
import { useSelector, useDispatch} from 'react-redux';

import { addRecipe } from '../favoriteRecipes/favoriteRecipesSlice.js';
import { loadData, selectFilteredAllRecipes } from './allRecipesSlice.js';
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";
const favoriteIconURL = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg';

export const AllRecipes = () => {
  /**continuing from yesterday we added useSelector hook to generate all recipes */
  const allRecipes = useSelector(selectFilteredAllRecipes);
  // Implement dispatch variable below.
  /**Now lets use the dispatch to dispatch action to the store  */
  const dispatch = useDispatch();

  /** notice that we can now add recipes but cannot remove them . Lets fix that*/

  const onFirstRender = () => {
    dispatch(loadData());
  }
  useEffect(onFirstRender, []);
  
  const onAddRecipeHandler = (recipe) => {
    dispatch(addRecipe(recipe));
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


