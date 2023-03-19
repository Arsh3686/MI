import { createStore } from "redux";
import rootReducer from "../reducers/CombineReducer";

const store = createStore(rootReducer);
console.log("from store login", store);

export default store;
