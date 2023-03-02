import { createStore } from "redux";
import AddProductReducers from "./AddProduct/AddProductReducers";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(AddProductReducers,composeWithDevTools())

export default store 