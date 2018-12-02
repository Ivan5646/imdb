import {combineReducers} from "redux";
import productReducer from "./productReducer";
import popularReducer from "./popularReducer";

const allReducers = combineReducers({ // that will be thrown to the Store
    posts: productReducer,
    popularMovies: popularReducer
});

export default allReducers;