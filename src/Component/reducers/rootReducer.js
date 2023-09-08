import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
// import CounterReducer from "./CounterReducer";



const rootReducer= combineReducers({
  cartReducer: cartReducer,
  // CounterReducer: CounterReducer,
});



export default rootReducer;
