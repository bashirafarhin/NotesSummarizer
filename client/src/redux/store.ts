import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./slice/message.slice";
import emailReducer from "./slice/email.slice";

export const store = configureStore({
  reducer: {
    message: messageReducer,
    email: emailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
