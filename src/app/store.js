import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import couponReducer from "../features/coupon/couponSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    coupon: couponReducer,
    user: userReducer,
  },
});
