import { createStore } from "redux";
import reducers from "../Reducers/CombineReducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

 const Store = createStore(reducers , {} , applyMiddleware(thunk))


 export default Store