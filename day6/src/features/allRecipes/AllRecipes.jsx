import { addRecipe } from '../favoriteRecipes/favoriteRecipesSlice.jsx';
import { loadData } from './allRecipesSlice'

import React, { useEffect } from 'react';
import FavoriteButton from '../../components/FavoriteButtons.jsx';
import Recipe from "../../components/Recipe";

const favoriteIconURL = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg'

export const AllRecipes = (props) => {
  
  const { allRecipes, dispatch } = props;

  const onFirstRender = () => {
    dispatch(loadData());
  }
  useEffect(onFirstRender, [])
  
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


