import { combineReducers } from "redux";
import reducer from "./reducer";
import dataReducer from "./dataReducer";

const rootReducer = combineReducers({
  searchReducer: reducer,
  apiData: dataReducer,
});
export default rootReducer;
