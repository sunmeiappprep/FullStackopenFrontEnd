import searchReducer from "./search";

import { combineReducers } from "redux";
import movielistReducer from "./movielist";
import apicallcounterReducer from "./apicallcounter";
const allReducers = combineReducers({
    search:searchReducer,
    movielist:movielistReducer,
    counter:apicallcounterReducer
})

export default allReducers