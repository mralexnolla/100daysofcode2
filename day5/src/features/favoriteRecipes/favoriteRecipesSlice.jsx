export const addRecipe = (recipe) => {
    return {
        type: 'favoriteRecipes/addRecipe',
        payload: recipe
    }
}

export const removeRecipe = (recipe) => {
    return{
        type: 'favoriteRecipe/removeRecipe',
        payload: recipe
    }
}

const initialFavoriteRecipes = [];
export const favoriteRecipesReducer = (favoriteRecipes = initialFavoriteRecipes, action ) =>{
    switch(action.type){
        case 'favoriteRecipes/addRecipe':
            return [...favoriteRecipes, action.payload];
        case 'favoriteRecipe/removeRecipe':
            return favoriteRecipes.filter(recipe => {
                return recipe.id !== action.payload.id
            });
        default:
            return favoriteRecipes
    }

}
