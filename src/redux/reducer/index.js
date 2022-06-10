import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import pomoReducer from "./pomoReducer";



export default combineReducers({
    todos,
    visibilityFilter,
    pomoReducer,
});