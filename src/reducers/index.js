import {combineReducers} from "redux";
import popularReducer from "./popularReducer";

const allReducers = combineReducers({ // that will be thrown to the Store
    popularMovies: popularReducer
});

export default allReducers;