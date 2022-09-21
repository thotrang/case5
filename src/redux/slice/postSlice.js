import {createSlice} from "@reduxjs/toolkit";
import {getAllPost, addPost, getPostInProfile, updateCommentPost} from "../../service/postService";

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
                state.posts = action.payload
            })
            .addCase(getAllPost.rejected, (state, action)=>{
                console.log(action)
            })
            .addCase(addPost.fulfilled, (state, action)=>{
                state.posts.push(action.payload)
            })
            .addCase(getPostInProfile.fulfilled,(state,action)=>{
                state.postsInProfile = action.payload
            })
            .addCase(getPostInProfile.rejected,(state,action)=>{
                console.log('lỗi getPostInProfile');
            })
            .addCase(updateCommentPost.fulfilled, (state, action) => {
                console.log(action);
                state.posts = state.posts.map((post) => {
                    if(post._id === action.payload.id){
                        post.comment.unshift(action.payload.comment)
                    }
                    return post;
                })
            })
            .addCase(updateCommentPost.rejected,(state,action)=>{
                console.log(action);
            })
}
})
export default postSlice.reducer