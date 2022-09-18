import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./slice/userSlice";
import postReducer from "./slice/postSlice"
export const store = configureStore({
    reducer:{
        user: userReducer,
        posts:postReducer
    }
})