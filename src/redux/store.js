import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./slice/userSlice";
import likeSlice from "./slice/likeSlice";
import friendSlice from "./slice/friendSlice";

import postReducer from "./slice/postSlice"
export const store = configureStore({
    reducer:{
        user: userReducer,
        friend: friendSlice.reducer,
        like: likeSlice.reducer,
        posts:postReducer,
    }
})