import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import userSlice from "./slice/userSlice";

const store = configureStore({
    reducer: {
        users: userSlice
    },
    middleware: [thunk]
})

export default store;