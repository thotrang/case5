import { createSlice } from "@reduxjs/toolkit";
import { loginApi, registerApi } from "../../service/userService";
const initialState = {
    user:{
        username: "",
        email: "",
        password: "",
        name: "",
        dob: "",
        avatar: ""
    },
    token:''
}
export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(registerApi.fulfilled,(state,action)=>{
            state.user = action.payload.user
            alert('register success')
        })
        .addCase(registerApi.rejected,(state,action)=>{
            if(action.error.message.includes('410')){
                alert("email was exitsted")
            }else if(action.error.message.includes('411')){
                alert("username was exitsted")
            }
        })
        .addCase(loginApi.fulfilled,(state,action)=>{
            state.token = action.payload.token
        })
        .addCase(loginApi.rejected,(state,action)=>{
            if(action.error.message.includes('401')){
                alert('sai mật khẩu')
            }else if(action.error.message.includes('401')){
                alert('không tìm thấy tài khoản')
            }
        })
    }
})
export default userSlice.reducer