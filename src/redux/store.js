import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;













// // store.js
// import { createStore } from "redux";
// import reducers from "./reducers/index";

// const store = createStore(reducers);

// export default store;
