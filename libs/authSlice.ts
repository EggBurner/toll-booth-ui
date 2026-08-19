import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { authApi } from "@/services/authApi";
import type { LoginResponseUser } from "@/types/auth";

export const AUTH_STORAGE_KEY = "auth_user";

interface AuthState {
    user: LoginResponseUser | null;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        hydrate: (state, action: PayloadAction<LoginResponseUser>) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem(AUTH_STORAGE_KEY);
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            authApi.endpoints.login.matchFulfilled,
            (state, action) => {
                state.user = action.payload.user;
                state.isAuthenticated = true;
                localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(action.payload.user));
            }
        );
    },
});

export const { hydrate, logout } = authSlice.actions;
export default authSlice.reducer;
