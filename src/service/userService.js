import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

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