import searchReducer from "./search";

import { combineReducers } from "redux";
import movielistReducer from "./movielist";
import apicallcounterReducer from "./apicallcounter";
import togglesounddivReducer from "./togglesounddiv";
import updateMediaReducer from "./updatemedia";
import addimageobjecttoreduxstateReducer from "./addimageobjecttoreduxstate";
const allReducers = combineReducers({
    search:searchReducer,
    movielist:movielistReducer,
    counter:apicallcounterReducer,
    togglesound:togglesounddivReducer,
    playerHeight:togglesounddivReducer,
    typeOfMedia:updateMediaReducer,
    arrayOfImageObject:addimageobjecttoreduxstateReducer
})

export default allReducers