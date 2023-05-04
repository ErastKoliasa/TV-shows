import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';
import { showsReducer } from "./reducer";

const store = createStore(showsReducer, applyMiddleware(thunk));
export default store