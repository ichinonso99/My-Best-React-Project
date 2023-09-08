import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";
import createReducer from "./DisplayReducer";
import taskReducer from "./taskReducer";

const rootReducer = combineReducers({
  counter: CounterReducer,
  display: createReducer,
  taskReducer: taskReducer,
});

export default rootReducer;
