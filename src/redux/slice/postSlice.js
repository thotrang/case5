// import {createSlice} from "@reduxjs/toolkit";
// import {
//     addPostThunk,
//     deletePostThunk,
//     getAllPostThunk,
//     getDetailPostThunk,
//     updatePostThunk
// } from "../../service/postService";
//
// const postSlice = createSlice({
//     name: 'posts',
//     initialState: {
//         posts: [],
//
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(getAllPostThunk.fulfilled, (state, action) => {
//                 state.friends = action.payload
//             })
//             .addCase(addPostThunk.fulfilled, (state, action) => {
//                 state.friends.push(action.payload.data)
//             })
//             .addCase(updatePostThunk.fulfilled, (state, action) => {
//                 state.friends = state.friends.map((item, index) => {
//                         if (item.id === action.payload.data.id) {
//                             item = action.payload.data;
//                         }
//                         return item;
//                     }
//                 );
//             })
//             .addCase(deletePostThunk.fulfilled, (state, action) => {
//                 state.friends = state.friends.filter((friend) => {
//                     return !(friend.id == action.payload)
//                 })
//             })
//             .addCase(getDetailPostThunk.fulfilled, (state, action) => {
//                 state.friend = state.friend.find((friend) => {
//                     return !(friend.id == action.payload)
//                 })
//             })
//     }
//
//
// })
// export default postSlice;