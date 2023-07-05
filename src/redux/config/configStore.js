import { legacy_createStore } from "redux";
import { combineReducers } from "redux";
import todoReducer from "../modules/todoReducer";

const rootReducer = combineReducers({
    todoReducer
});

const store = legacy_createStore(rootReducer);

export default store;