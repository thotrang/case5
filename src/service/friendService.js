import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

let URL = "http://localhost:3000/friends";
export const addFriendThunk = createAsyncThunk(
    'friends/add',
    async (values) => {
        return await axios.post(`${URL}`, values)
    }
)
export const updateFriendThunk = createAsyncThunk(
    'friends/edit',
    async (values) => {
        return await axios.put(`${URL}/${values.id}`, {data: values});
    }
)
export const deleteFriendThunk = createAsyncThunk(
    'friends/delete',
    async (idDelete) => {
        await axios.delete(`${URL}/${idDelete}`)
        return idDelete
    }
)
export const getAllFriendThunk = createAsyncThunk(
    'friends/getAll',
    async () => {
        const {data} = await axios.get(`${URL}`)
    }
)
export const getDetailFriendThunk = createAsyncThunk(
    'friends/getDetail',
    async (id)=>{
return await axios.get(`${URL}/${id}`)
    }

)