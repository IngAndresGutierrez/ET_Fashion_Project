//import { createStore, applyMiddleware, compose } from "redux";
//import createDebounce from "redux-debounced";
//import thunk from "redux-thunk";
import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native

//const middlewares = [thunk, createDebounce()];
const persistConfig = {
  key: "etfashionapproot",
  storage
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
