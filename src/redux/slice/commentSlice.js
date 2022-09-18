// import {createSlice} from "@reduxjs/toolkit";
// import {
//     addCommentThunk,
//     deleteCommentThunk,
//     getAllCommentThunk, getDetailCommentThunk,
//     updateCommentThunk
// } from "../../service/commentService";
//
// const commentSlice = createSlice({
//     name: 'comments',
//     initialState: {
//         comments: [],
//
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(getAllCommentThunk.fulfilled, (state, action) => {
//                 state.comments = action.payload
//             })
//             .addCase(addCommentThunk.fulfilled, (state, action) => {
//                 state.comments.push(action.payload.data)
//             })
//             .addCase(updateCommentThunk.fulfilled, (state, action) => {
//                 state.comments = state.comments.map((item, index) => {
//                         if (item.id === action.payload.data.id) {
//                             item = action.payload.data;
//                         }
//                         return item;
//                     }
//                 );
//             })
//             .addCase(deleteCommentThunk.fulfilled, (state, action) => {
//                 state.comments = state.comments.filter((comment) => {
//                     return !(comment.id == action.payload)
//                 })
//             })
//             .addCase(getDetailCommentThunk.fulfilled, (state, action) => {
//                 state.comment = state.comment.find((comment) => {
//                     return !(comment.id == action.payload)
//                 })
//             })
//     }
//
//
// })
// export default commentSlice;