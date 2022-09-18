import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./slice/userSlice";
import likeSlice from "./slice/likeSlice";
import friendSlice from "./slice/friendSlice";

export const store = configureStore({
    reducer:{
        user: userReducer,
        friend: friendSlice.reducer,
        like: likeSlice.reducer,
        // post: postSlice.reducer,
    }
})