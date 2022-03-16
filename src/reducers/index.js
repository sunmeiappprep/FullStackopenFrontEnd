import searchReducer from "./search";

import { combineReducers } from "redux";
import movielistReducer from "./movielist";
import apicallcounterReducer from "./apicallcounter";
import togglesounddivReducer from "./togglesounddiv";
const allReducers = combineReducers({
    search:searchReducer,
    movielist:movielistReducer,
    counter:apicallcounterReducer,
    togglesound:togglesounddivReducer
})

export default allReducers