import {createSlice} from "@reduxjs/toolkit";
import {
    addUserThunk,
    deleteUserThunk,
    getAllUserThunk,
    getDetailUserThunk,
    updateUserThunk
} from "../../service/userService";

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],

    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllUserThunk.fulfilled, (state, action) => {
                state.users = action.payload
            })
            .addCase(addUserThunk.fulfilled, (state, action) => {
                state.users.push(action.payload.data)
            })
            .addCase(updateUserThunk.fulfilled, (state, action) => {
                state.users = state.users.map((item, index) => {
                        if (item.id === action.payload.data.id) {
                            item = action.payload.data;
                        }
                        return item;
                    }
                );
            })
            .addCase(deleteUserThunk.fulfilled, (state, action) => {
                state.users = state.users.filter((user) => {
                    return !(user.id == action.payload)
                })
            })
            .addCase(getDetailUserThunk.fulfilled, (state, action) => {
                state.friend = state.friend.find((user) => {
                    return !(user.id == action.payload)
                })
            })
    }


})
export default userSlice;