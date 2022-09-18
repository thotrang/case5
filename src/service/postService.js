import {createAsyncThunk} from "@reduxjs/toolkit";
const baseURL = "https://localhost:3000/";
// import customAxios from './apiToken'
import axios  from "axios";
export const getAllPost = createAsyncThunk(
    'posts/getAll',
    async () => {
        const res = await axios.get(`${baseURL}/posts`);
        return res.data;
    }
)
export const getDetailPost = createAsyncThunk(
    'posts/detail',
    async (id) => {
        const res = await axios.get(`${baseURL}/detail//posts/${id}`)
        return res.data;
    }
)
export const addCommentPost = createAsyncThunk(
    'post/add',
    async () => {
        const res = await axios.post(`${baseURL}/posts`);
        return res.data;
    }
)
export const updatePost = createAsyncThunk(
    'post/update',
    async (id) => {
        const res = await axios.put(`${baseURL}/${id}`)
        return res.data;
    }
)
export const deletePost  = createAsyncThunk(
    'post/delete',
    async (id) => {
        const res = await axios.delete(`${baseURL}/${id}`)
    }
)