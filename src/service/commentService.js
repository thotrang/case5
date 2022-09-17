import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

let URL = "http://localhost:3000/comments";
export const addCommentThunk = createAsyncThunk(
    'comments/add',
    async (values) => {
        return await axios.post(`${URL}`, values)
    }
)
export const updateCommentThunk = createAsyncThunk(
    'comments/edit',
    async (values) => {
        return await axios.put(`${URL}/${values.id}`, {data: values});
    }
)
export const deleteCommentThunk = createAsyncThunk(
    'comments/delete',
    async (idDelete) => {
        await axios.delete(`${URL}/${idDelete}`)
        return idDelete
    }
)
export const getAllCommentThunk = createAsyncThunk(
    'comments/getAll',
    async () => {
        const {data} = await axios.get(`${URL}`)
    }
)
export const getDetailCommentThunk = createAsyncThunk(
    'comments/getDetail',
    async (id)=>{
        return await axios.get(`${URL}/${id}`)
    }

)