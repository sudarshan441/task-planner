import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { getSprintReducer } from "./getSprints/get.reducers";
import { postSprintReducer } from "./postStrints/post.reducers";


const rootReducer = combineReducers({
   Sprint:postSprintReducer,
   Sprints:getSprintReducer
   
});
export const store = legacy_createStore(
    rootReducer,
    applyMiddleware(thunk)
);