import {createAsyncThunk} from "@reduxjs/toolkit";
const baseURL = "https://localhost:3000/";
// import customAxios from './apiToken'
import axios  from "axios";
export const getAllComment = createAsyncThunk(
    'comment/getAll',
    async () => {
        const res = await axios.get(`${baseURL}`);
        return res.data;
    }
)
export const getDetailComment = createAsyncThunk(
    'comment/detail',
    async (id) => {
        const res = await axios.get(`${baseURL}/detail/${id}`)
        return res.data;
    }
)
export const addComment = createAsyncThunk(
    'comment/add',
    async () => {
        const res = await axios.post(`${baseURL}`);
        return res.data;
    }
)
export const updateComment = createAsyncThunk(
    'comment/update',
    async (id) => {
        const res = await axios.put(`${baseURL}/${id}`)
        return res.data;
    }
)
export const deleteComment = createAsyncThunk(
    'comment/delete',
    async (id) => {
        const res = await axios.delete(`${baseURL}/${id}`)
    }
)