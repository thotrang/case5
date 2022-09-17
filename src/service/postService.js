import {createAsyncThunk} from "@reduxjs/toolkit";
const baseURL = "https://localhost:3000/";
// import customAxios from './apiToken'
import axios  from "axios";
export const getAllApi = createAsyncThunk(
    'post/getAll',
    async () => {
        const res = await axios.get(`${baseURL}`);
        return res.data;
    }
)
export const getDetailApi = createAsyncThunk(
    'post/detail',
    async (id) => {
        const res = await axios.get(`${baseURL}/detail/${id}`)
        return res.data;
    }
)
export const addCommentApi = createAsyncThunk(
    'post/add',
    async () => {
        const res = await axios.post(`${baseURL}`);
        return res.data;
    }
)
export const updateApi = createAsyncThunk(
    'post/update',
    async (id) => {
        const res = await axios.put(`${baseURL}/${id}`)
        return res.data;
    }
)
export const deleteApi = createAsyncThunk(
    'post/delete',
    async (id) => {
        const res = await axios.delete(`${baseURL}/${id}`)
    }
)