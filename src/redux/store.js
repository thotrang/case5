import {configureStore} from "@reduxjs/toolkit";
import friendSlice from "./slice/friendSlice";
import likeSlice from "./slice/likeSlice";
import postSlice from "./slice/postSlice";
import userSlice from "./slice/userSlice";

export const store = configureStore({
    reducer: {
        friend: friendSlice.reducer,
        like: likeSlice.reducer,
        // post: postSlice.reducer,
        user: userSlice.reducer,

    }
})