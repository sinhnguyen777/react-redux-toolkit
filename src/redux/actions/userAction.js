import { createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../../apis/userApi"

const userAction = {
    fetchAsyncUsers: createAsyncThunk('users/fetchAsyncUsers', async () => {
        try {
            const res = await userApi.getAll()
            return res.data
        } catch (error) {
            console.log(error.message);
        }
    }),
    createAsyncUser: createAsyncThunk('users/createUser', async (data) => {
        try {
            const res = await userApi.create(data)
            return res.data
        } catch (error) {
            console.log(error.message);
        }
    }),
    deleteUserById: createAsyncThunk('users/deleteUserById', async (id) => {
        try {
            const res = await userApi.delete(id)
            return res.data
        } catch (error) {
            console.log(error.message);
        }
    }),

}

export const { fetchAsyncUsers, deleteUserById, createAsyncUser } = userAction;
