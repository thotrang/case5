import { createAsyncThunk } from "@reduxjs/toolkit";
import {customAxios} from "./apiToken"
const baseURL = 'http://localhost:3000';

export const registerApi = createAsyncThunk(
    'user/register',
    async (data) => {
    const res = await customAxios.post(`${baseURL}/register`, data.user)
    data.navigate('/login')
    return res.data
  }

)
export const loginApi = createAsyncThunk(
    'user/login',
    async (data) => {
        const res = await customAxios.post(`${baseURL}/login` , data.user)
        data.navigate('/home')
        return res.data
    }
)
export const updateApi = createAsyncThunk(
    'user/update',
    async (data, id) => {
        const res = await customAxios.put(`${baseURL}/${id}`,data)
        return res.data
    }
)
export const getAllApi = createAsyncThunk(
    'user/getAll',
    async ()=>{
        const res = await customAxios.get(`${baseURL}/users`)
        return res.data
    }
)
export const getDetailApi = createAsyncThunk(
    'user/detail',
    async (id)=> {
        const res= await customAxios.get(`${baseURL}/detail/${id}`)
        return res.data
    }
)
export const getUserToLocalstorageApi = createAsyncThunk(
    'user/toLocalstorage',
    async ()=> {
        const res = await customAxios.get(`${baseURL}/users/getUserToLocalstorage`)
        return res.data
    }
)