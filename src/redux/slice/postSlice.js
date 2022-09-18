import {createSlice} from "@reduxjs/toolkit";
import {getAllPost} from "../../service/postService";

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

}
})
export default postSlice.reducer