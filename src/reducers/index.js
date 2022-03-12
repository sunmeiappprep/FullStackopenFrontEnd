import searchReducer from "./search";

import { combineReducers } from "redux";
import movielistReducer from "./movielist";

const allReducers = combineReducers({
    search:searchReducer,
    movielist:movielistReducer
})

export default allReducers