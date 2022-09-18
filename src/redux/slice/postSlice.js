import {createSlice} from "@reduxjs/toolkit";
import {getAllPost
} from "../../service/postService";
const initialState = {
    posts: []
}
export const postSlice = createSlice({
    name: "posts",
    initialState,
    extraReducers:(builder) => {
        builder
            .addCase(getAllPost.fulfilled, (state, action)=>{
                console.log(action);

        })
            .addCase(getAllPost.rejected, (state, action)=>{
                console.log(action);
            })
    }
})