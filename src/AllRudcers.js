import { combineReducers } from "redux";
import Getdatareducer from './Getdatareducer'
import reducer   from './reducer';


export default combineReducers ({
    moviesdata : Getdatareducer,
    favourites : reducer

})