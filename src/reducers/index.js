import {combineReducers} from "redux";
import productReducer from "./productReducer";

const allReducers = combineReducers({ // that will be thrown to the Store
    posts: productReducer
});

export default allReducers;