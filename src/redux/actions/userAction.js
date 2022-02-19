import { createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../../apis/userApi"

const userAction = {
    fetchAsyncUsers: createAsyncThunk('users/fetchAsyncUsers', async () => {
        return await userApi.getAll()
    }),

    deleteUserById: createAsyncThunk('users/deleteUserById', async (id) => {
        return await userApi.delete(id)
    })
}

export const { fetchAsyncUsers, deleteUserById } = userAction;
