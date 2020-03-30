// import external modules
import { combineReducers } from "redux";


// import boilerplate reducers
import user from "./user/user";

import { reducer as toastrReducer } from "react-redux-toastr";

const rootReducer = combineReducers({
 
  toastr: toastrReducer, // <- Mounted at toastr.
  user: user,
});

export default rootReducer;
