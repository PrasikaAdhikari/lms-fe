import { configureStore } from "@reduxjs/toolkit"; // this

export default configureStore({
  reducer: {
    userStore: userReducer,
  },
});
