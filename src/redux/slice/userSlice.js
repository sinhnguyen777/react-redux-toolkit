import { createSlice } from "@reduxjs/toolkit";
import { fetchAsyncUsers, deleteUserById, createAsyncUser } from "../actions/userAction";

const initialState = {
    users: [],
    loading: true,
    error: ''
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAsyncUsers.pending, (state, actions) => {
                state.loading = true
            })
            .addCase(fetchAsyncUsers.fulfilled, (state, actions) => {
                state.loading = false
                state.users = actions.payload
                state.error = null
            })
            .addCase(fetchAsyncUsers.rejected, (state, actions) => {
                state.loading = true
                state.users = undefined
                state.error = actions.error
            })

            // add new data
            .addCase(createAsyncUser.fulfilled, (state, actions) => {
                state.users.unshift(actions.payload)
                state.loading = false
                state.error = null
            })

            // remove data by ID
            .addCase(deleteUserById.fulfilled, (state, actions) => {
                delete state.users[actions.payload.id]
            })
    }

    // extraReducers: {
    //     [fetchAsyncUsers.pending]: (state, actions) => {
    //         state.loading = true
    //     },
    //     [fetchAsyncUsers.fulfilled]: (state, actions) => {
    //         state.loading = false
    //         state.users = actions.payload
    //     },
    //     [fetchAsyncUsers.rejected]: (state, actions) => {
    //         state.error = actions.payload
    //     },

    //     [createAsyncUser.fulfilled]: (state, actions) => {
    //         state.push(actions.payload);
    //     },
    //     [deleteUserById.fulfilled]: (state, actions) => {
    //         delete state.users[actions.payload.id]
    //     },
    // },
})

export const { getAllUser, createUser, removeUserById } = userSlice.actions;
export default userSlice.reducer;