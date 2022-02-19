import { createSlice } from "@reduxjs/toolkit";
import { fetchAsyncUsers, deleteUserById } from "../actions/userAction";

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
            state.loading = true
        },
        [fetchAsyncUsers.fulfilled]: (state, actions) => {
            state.loading = false
            state.users = actions.payload
        },
        [fetchAsyncUsers.rejected]: (state, actions) => {
            state.error = actions.payload
        },
        [deleteUserById.fulfilled]: (state, actions) => {
            delete state.users[actions.payload.id]
            return state;
        }
    },
})

export const { getAllUser, removeUserById } = userSlice.actions;
export default userSlice.reducer;