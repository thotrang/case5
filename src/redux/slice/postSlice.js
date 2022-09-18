import {createSlice} from "@reduxjs/toolkit";
import {
    getAllPost,
    addPost, updatePost, deletePost
} from "../../service/postService";

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
                console.log('loi')
            })
            .addCase(addPost.fulfilled, (state, action)=>{
                console.log(action.payload)
                // state.posts.push(action.payload)
            })
            .addCase(addPost.rejected, (state, action)=>{
                console.log('error')
            })
            .addCase(updatePost.fulfilled, (state, action) => {

            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.posts = state.posts.filter(post =>{
                    return post.id !== action.payload.id
                })
            })
            .addCase(deletePost.rejected, (state, action) => {
                console.log('error')
            })

}
})
export default postSlice.reducer