import { createSlice} from "@reduxjs/toolkit";
import {addLikeThunk, deleteLikeThunk, getAllLikeThunk, updateLikeThunk} from "../../service/likeService";

const likeSlice = createSlice({
    name: '',
    initialState: {
        likes: []
    },
    extraReducers: (builder) => {
        builder
                .addCase(getAllLikeThunk.fulfilled, (state, action) => {
                    state.likes = action.payload
                })
                .addCase(addLikeThunk.fulfilled, (state, action) => {
                    state.likes.push(action.payload.data)
                })
                .addCase(updateLikeThunk.fulfilled, (state, action) => {
                    state.likes = state.likes.map((item, index) => {
                            if (item.id === action.payload.data.id) {
                                item = action.payload.data;
                            }
                            return item;
                        }
                    );
                })
                .addCase(deleteLikeThunk.fulfilled, (state, action) => {
                    state.likes = state.likes.filter((friend) => {
                        return !(friend.id == action.payload)
                    })
                })
    }


})
export default likeSlice;