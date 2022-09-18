import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./slice/userSlice";
import postReducer from "./slice/postSlice";
import commentReducer from "./slice/commentSlice";
export const store = configureStore({
    reducer:{
        user: userReducer,
        posts:postReducer,
        comments:commentReducer
    }
})