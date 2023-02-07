import {createSlice} from "@reduxjs/toolkit";

export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment', 'CodeTrain'];
const initialState = CATEGORIES.map(category => ({ category: category, amount: 0 }))


const budgetsSlice = createSlice({
  name: "budgets",
  initialState: initialState,
  reducers: {
    editBudget: (state, action) => {
      //const {category, amount} = action.payload; either <= or like below
      const category = action.payload.category;
      const amount = action.payload.amount;
      
      // The budget object whose .category value matches action.payload.category and changing with the .amount value to action.payload.amount.
      state.find(budget => budget.category === category).amount = amount;
      
     
    }
  }

})


export const {editBudget} = budgetsSlice.actions;
export default budgetsSlice.reducer;

export const selectBudgets = (state) => state.budgets;


/*

export const editBudget = (budget) => {
  return {
    type: 'budgets/editBudget',
    payload: budget
  }
}

const budgetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'budgets/editBudget':
      const newBudgets = state.map(budget => {
        if (budget.category === action.payload.category) {
          return action.payload;
        }
        return budget;
      })
      return newBudgets;
    default:
      return state;
  }
}



export const selectBudgets = (state) => state.budgets;
export default budgetsReducer;
*/

