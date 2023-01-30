import allRecipesData from "../../data";

export const loadData = () => {
    return{
        type: 'allRecipes/loadData',
        payload: allRecipesData
    }
}

const initialAllReciepes = [];

export const allRecipesReducer = (allRecipes = allRecipesReducer, action) => {
    switch(action.type){
        case 'allRecipes/loadData':
            return action.payload
    default:
        return allRecipesData
    }
}