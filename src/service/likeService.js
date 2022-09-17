import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

let URL = "http://localhost:3000/likes";
export const addLikeThunk = createAsyncThunk(
    'likes/add',
    async (values) => {
        return await axios.post(`${URL}`, values)
    }
)
export const updateLikeThunk = createAsyncThunk(
    'likes/edit',
    async (values) => {
        return await axios.put(`${URL}/${values.id}`, {data: values});
    }
)
export const deleteLikeThunk = createAsyncThunk(
    'likes/delete',
    async (idDelete) => {
        await axios.delete(`${URL}/${idDelete}`)
        return idDelete
    }
)
export const getAllLikeThunk = createAsyncThunk(
    'likes/getAll',
    async () => {
        const {data} = await axios.get(`${URL}`)
    }
)
