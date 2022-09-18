import {createSlice} from "@reduxjs/toolkit";
import {
    addFriendThunk,
    deleteFriendThunk,
    getAllFriendThunk,
    getDetailFriendThunk,
    updateFriendThunk
} from "../../service/friendService";

const friendSlice = createSlice({
    name: 'friends',
    initialState: {
        friends: [],
        friend: {}
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllFriendThunk.fulfilled, (state, action) => {
                state.friends = action.payload
            })
            .addCase(addFriendThunk.fulfilled, (state, action) => {
                state.friends.push(action.payload.data)
            })
            .addCase(updateFriendThunk.fulfilled, (state, action) => {
                state.friends = state.friends.map((item, index) => {
                        if (item.id === action.payload.data.id) {
                            item = action.payload.data;
                        }
                        return item;
                    }
                );
            })
            .addCase(deleteFriendThunk.fulfilled, (state, action) => {
                state.friends = state.friends.filter((friend) => {
                    return !(friend.id == action.payload)
                })
            })
            .addCase(getDetailFriendThunk.fulfilled, (state, action) => {
                state.friend = state.friend.find((friend) => {
                    return !(friend.id == action.payload)
                })
            })
    }


})
export default friendSlice;