import {
  configureStore,
  combineReducers, // redux의 그것과 같다.
  // getDefaultMiddleware,
} from "@reduxjs/toolkit";
import user from "features/user/reducer/userSlice";
import logger from "redux-logger";

export const rootReducer = combineReducers({ user }); //리듀서에 유저스라는 이름으로있지만 리듀서밖에서는 유저라고부를거야!

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
