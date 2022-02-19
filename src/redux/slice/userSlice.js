import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../../apis/userApi"

export const fetchAsyncUsers = createAsyncThunk('users/fetchAsyncUsers', async () => {
    return await userApi.getAll()
})

export const deleteUserById = createAsyncThunk('users/deleteUserById', async (id) => {
    return await userApi.delete(id)
})

const initialState = {
    users: {},
    loading: true,
    error: ''
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchAsyncUsers.pending]: (state, actions) => {
            // console.log('pending');
            state.loading = true
        },
        [fetchAsyncUsers.fulfilled]: (state, actions) => {
            // console.log('fulfilled');
            state.loading = false
            state.users = actions.payload
        },
        [fetchAsyncUsers.rejected]: (state, actions) => {
            // console.log('rejected');
            state.error = actions.payload
        },
        [deleteUserById.fulfilled]: (state, actions) => {
            console.log('delete successflly');
            delete state.users[actions.payload.id]
            return state;
        }
    },
})

export const { getAllUser, removeUserById } = userSlice.actions;
export default userSlice.reducer;