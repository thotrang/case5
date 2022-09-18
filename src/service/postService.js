import {createAsyncThunk} from "@reduxjs/toolkit";
import axios  from "axios";
import {customAxios} from "./apiToken";

const baseURL = "http://localhost:3000";
 // import customAxios from './apiToken'
export const getAllPost = createAsyncThunk(
    'posts/getAll',
    async () => {
        const res = await customAxios.get(`${baseURL}/posts`)
        return res.data
    }
)
export const getDetailPost = createAsyncThunk(
    'posts/detail',
    async (id) => {
        const res = await axios.get(`${baseURL}/detail/posts/${id}`)
        return res.data;
    }
)
export const addPost = createAsyncThunk(
    'posts/add',
    async (value) => {
        const res = await axios.post(`${baseURL}/posts`,value);
        return res.data;
    }
)
export const updatePost = createAsyncThunk(
    'posts/update',
    async (id) => {
        const res = await axios.put(`${baseURL}/${id}`)
        return res.data;
    }
)
export const deletePost  = createAsyncThunk(
    'posts/delete',
    async (id) => {
        const res = await axios.delete(`${baseURL}/${id}`)
    }
)