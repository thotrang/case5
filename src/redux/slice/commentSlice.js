import {createSlice} from "@reduxjs/toolkit";
import {
    getAllComment,
    getDetailComment,
    addComment,
    updateComment,
    deleteComment
} from "../../service/commentService";

const initialState = {
    comments: [],
    comment : ""
}
export const commentSlice = createSlice({
    name: "comments",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAllComment.fulfilled, (state, action) => {
            state.comments = action.payload
        })
            .addCase(getDetailComment.fulfilled, (state, action) => {
                state.comment = state.comment.find((comment) => {
                    return comment.id !== action.payload.id
                })
            })
            .addCase(addComment.fulfilled, (state, action) => {
                state.comments.push(action.payload.data)
            })
            .addCase(updateComment.fulfilled, (state, action) => {
                state.comments = state.comments.map((comment) => {
                    if (comment.id === action.payload.data.id) {
                        comment = action.payload.data
                    }
                    return comment
                })
            })
            .addCase(deleteComment.fulfilled, (state, action) => {
                state.comments = state.comments.filter((comment) =>{
                    return comment.id !== action.payload.data.id
                })
            })
    }
})
