import {combineReducers} from "redux";
import UserReducer from "./reducer-users"; // UserReducer - the name of the variable that holds reducer-users
import ActiveUserReducer from "./reducer-active-user";
import KittiesReducer from "./reducer-test";
import productReducer from "./productReducer";

const allReducers = combineReducers({ // that will be thrown to the Store
    users: UserReducer, // equals to object in reducer-users
    activeUser: ActiveUserReducer,
    kitties: KittiesReducer,
    products: productReducer
});

export default allReducers;