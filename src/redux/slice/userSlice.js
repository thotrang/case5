import { createSlice } from "@reduxjs/toolkit";
import { getAllApi, getUserToLocalstorageApi, loginApi, registerApi } from "../../service/userService";
const initialState = {
    user: {
        username: "",
        email: "",
        password: "",
        name: "",
        dob: "",
        avatar: ""
    },
    token: '',
    checkEmailExitsted: false,
    checkUsernameExitsted: false,
    checkPassword: false,
    listAllUser: [],
    myProfile: {}

}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: () => initialState
    },
    extraReducers: (builder) => {
        builder
            //register
            .addCase(registerApi.fulfilled, (state, action) => {

                state.checkEmailExitsted = false
                state.checkUsernameExitsted = false
                state.isRegisterSuccess = true
                state.user = action.payload.user
                alert('register success')

            })
            .addCase(registerApi.rejected, (state, action) => {
                console.log(action);
                if (action.error.message.includes('411')) {
                    state.checkEmailExitsted = false
                    state.checkUsernameExitsted = true

                } else if (action.error.message.includes('410')) {
                    state.checkUsernameExitsted = false
                    state.checkEmailExitsted = true

                }

            })
            //login
            .addCase(loginApi.fulfilled, (state, action) => {
                localStorage.setItem('accessToken', JSON.stringify(action.payload.token));
                state.token = action.payload.token
            })
            .addCase(loginApi.rejected, (state, action) => {
                if (action.error.message.includes('404')) {
                    state.checkPassword = false
                    state.checkUsernameExitsted = true
                } else if (action.error.message.includes('401')) {
                    state.checkUsernameExitsted = false
                    state.checkPassword = true
                }
            })
            // get userLocal
            .addCase(getUserToLocalstorageApi.fulfilled, (state, action) => {
                state.myProfile = action.payload
            })
            .addCase(getUserToLocalstorageApi.rejected,(state,action)=>{
                console.log(action.error);
            })
            .addCase(getAllApi.fulfilled,(state,action)=>{
                state.listAllUser = action.payload
            })
     
    }
})
export const listAllUser = (state) => state.user.listAllUser
export const myProfile = (state) => state.user.myProfile
export const checkPassword = (state) => state.user.checkPassword
export const checkEmailExitsted = (state) => state.user.checkEmailExitsted;
export const checkUsernameExitsted = (state) => state.user.checkUsernameExitsted;
export default userSlice.reducer