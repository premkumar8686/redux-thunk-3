import { combineReducers } from "redux";

let init = [];

const myReducer = (state = init, action) => {
  switch(action.type)
  {
    case 'fetch':
     return  action.actionData;
    case 'Reset':
     return state = init;
    default:
     return state = init;
  }
}

export const rootReducer = combineReducers({
    myReducer
});