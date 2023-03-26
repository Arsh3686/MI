import { createStore } from "redux";
import rootReducer from "../reducers/CombineReducer";

const store = createStore(rootReducer);

export default store;
