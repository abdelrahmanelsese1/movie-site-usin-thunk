import {createStore,applyMiddleware } from "redux";
import combineReducers from "./AllRudcers";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";


const store  = createStore(combineReducers,composeWithDevTools(applyMiddleware(thunk)))

export default store;