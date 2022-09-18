import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
const baseURL = 'http://localhost:3000';

let URL = "http://localhost:3000/users";
export const addUserThunk = createAsyncThunk(
    'users/add',
    async (values) => {
        return await axios.post(`${URL}`, values)
    }
)
export const updateUserThunk = createAsyncThunk(
    'users/edit',
    async (values) => {
        return await axios.put(`${URL}/${values.id}`, {data: values});
    }
)
export const deleteUserThunk = createAsyncThunk(
    'users/delete',
    async (idDelete) => {
        await axios.delete(`${URL}/${idDelete}`)
        return idDelete
    }
)
export const getAllUserThunk = createAsyncThunk(
    'users/getAll',
    async () => {
        const {data} = await axios.get(`${URL}`)
    }
)
export const getDetailUserThunk = createAsyncThunk(
    'users/getDetail',
    async (id)=>{
        return await axios.get(`${URL}/${id}`)
    }

)
export const registerApi = createAsyncThunk(
    'user/register',
    async (data) => {
    const res = await axios.post(`${baseURL}/register`, data.user)
    data.navigate('/login')
    return res.data
  }
)
export const loginApi = createAsyncThunk(
    'user/login',
    async (data) => {
        const res = await axios.post(`${baseURL}/login` , data.user)
        data.navigate('/home')
        return res.data
    }
)
export const updateApi = createAsyncThunk(
    'user/update',
    async (data, id) => {
        const res = await axios.put(`${baseURL}/${id}`,data)
        return res.data
    }
)
export const getAllApi = createAsyncThunk(
    'user/getAll',
    async ()=>{
        const res = await axios.get(`${baseURL}`)
        return res.data
    }
)
export const getDetailApi = createAsyncThunk(
    'user/detail',
    async (id)=> {
        const res= await axios.get(`${baseURL}/detail/${id}`)
        return res.data
    }
)
export const getUserToLocalstorageApi = createAsyncThunk(
    'user/toLocalstorage',
    async ()=> {
        const res = await axios.get(`${baseURL}/getUserToLocalstorage`)
        return res.data
    }
)