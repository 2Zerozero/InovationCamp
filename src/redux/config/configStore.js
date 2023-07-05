import { legacy_createStore } from "redux";
import { combineReducers } from "redux";

const rootReducer = combineReducers({

});

const store = legacy_createStore(rootReducer);

export default store;