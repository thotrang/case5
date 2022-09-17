import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

let URL = "http://localhost:3000/posts";
export const addPostThunk = createAsyncThunk(
    'posts/add',
    async (values) => {
        return await axios.post(`${URL}`, values)
    }
)
export const updatePostThunk = createAsyncThunk(
    'posts/edit',
    async (values) => {
        return await axios.put(`${URL}/${values.id}`, {data: values});
    }
)
export const deletePostThunk = createAsyncThunk(
    'posts/delete',
    async (idDelete) => {
        await axios.delete(`${URL}/${idDelete}`)
        return idDelete
    }
)
export const getAllPostThunk = createAsyncThunk(
    'posts/getAll',
    async () => {
        const {data} = await axios.get(`${URL}`)
    }
)
export const getDetailPostThunk = createAsyncThunk(
    'posts/getDetail',
    async (id)=>{
        return await axios.get(`${URL}/${id}`)
    }

)