import {createSlice} from "@reduxjs/toolkit";
import {getAllPost, addPost, getPostInProfile, updatePost, deletePost} from "../../service/postService";

const initialState = {
    posts: [],
    postsInProfile:[]
}
export const postSlice = createSlice({

    name: "posts",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllPost.fulfilled, (state, action)=>{
                state.posts = action.payload.reverse();
            })
            .addCase(getAllPost.rejected, (state, action)=>{
                console.log(action)
            })
            .addCase(addPost.fulfilled, (state, action)=>{
                state.posts.unshift(action.payload)
            })
            .addCase(getPostInProfile.fulfilled,(state,action)=>{
                state.postsInProfile = action.payload
            })
            .addCase(getPostInProfile.rejected,(state,action)=>{
                console.log('lỗi getPostInProfile');
            })
            .addCase(updatePost.fulfilled,(state, action)=>{
                state.posts = state.posts.map((post)=>{
                    if (post.id === action.payload.id) {
                        post= action.payload
                    }
                })
            })
            .addCase(deletePost.fulfilled,(state, action)=>{
                state.posts =  state.posts.filter((post)=>{
                    return post._id !== action.payload
                })
            })
            .addCase(deletePost.rejected,(state, action)=>{
                console.log('loio')
            })
}
})
export default postSlice.reducer