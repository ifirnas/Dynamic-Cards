import { combineReducers } from "redux";
import cards from "../Cards/CardsReducer";
import loader from "../Loader/LoaderReducer"

export default combineReducers({
  cards,
  loader
});