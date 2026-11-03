import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { ApiErrorType, UsersInfoType, UserType } from "./userInterface";
import axios from "axios";


const initialState: UsersInfoType = {
    users: [],
    user: null,
    loading: false,
    error: null
}


const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(usersFetchingUsers.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(usersFetchingUsers.fulfilled, (state, action) => {
                state.loading = false
                state.users = action.payload
            })
            .addCase(usersFetchingUsers.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload ?? {
                    message: action.error.message ?? "Unknowing words!",
                    status: 502
                }
            })
            .addCase(usersFetchingUserById.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(usersFetchingUserById.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload
            })
            .addCase(usersFetchingUserById.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload ?? { message: action.error.message ?? "Unknowing words!", status: 502 }
            })
    }
})



export const usersFetchingUsers = createAsyncThunk<UserType[], void, { rejectValue: ApiErrorType }>(
    "users/fetchingUsers",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            return response.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue({
                    message: error.response?.data?.message || error.message,
                    status: error.response?.status || 500
                })
            }
            return rejectWithValue({
                message: "Something went wrong!", status: 501
            })
        }
    }
)

export const usersFetchingUserById = createAsyncThunk<UserType, number, { rejectValue: ApiErrorType }>(
    "users/fetchingUserById",
    async (userId, { rejectWithValue }) => {
        try {
            const response = await axios.get<UserType>(`https://jsonplaceholder.typicode.com/users/${userId}`)
            return response.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue({
                    message: error.response?.data?.message || error.message,
                    status: error.response?.status || 500
                })
            }
            return rejectWithValue({
                message: "Something went wrong!", status: 501
            })
        }
    }
)

export default usersSlice.reducer