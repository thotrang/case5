import {createSlice} from "@reduxjs/toolkit";
import {getAllPost, addPost} from "../../service/postService";

const initialState = {
    posts: []
}
export const postSlice = createSlice({

    name: "posts",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllPost.fulfilled, (state, action)=>{
                state.posts = action.payload
            })
            .addCase(getAllPost.rejected, (state, action)=>{
                console.log(action)
            })
            .addCase(addPost.fulfilled, (state, action)=>{
                console.log(action.payload)
                state.posts.push(action.payload)
            })

}
})
export default postSlice.reducer