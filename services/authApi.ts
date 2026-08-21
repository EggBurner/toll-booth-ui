import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { SignUpRequest, SignUpResponse } from "@/types/auth";
import type { LoginRequest, LoginResponse } from "@/types/auth";
import type { ResetPasswordRequest, ResetPasswordResponse } from "@/types/auth";

export const authApi = createApi({
    reducerPath: "authApi",

    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL,
    }),

    endpoints: (builder) => ({
        register: builder.mutation<SignUpResponse, SignUpRequest>({
            query: (userData) => ({
                url:"/register",
                method: "POST",
                body: userData
            })
        }),
        login: builder.mutation<LoginResponse, LoginRequest>({
            query: (loginData) => ({
                url: "/login",
                method: "POST",
                body: loginData
            })
        }),
        resetPassword: builder.mutation<ResetPasswordResponse, ResetPasswordRequest>({
            query: (resetData) => ({
                url: "/reset-password",
                method: "POST",
                body: resetData
            })
        })
    })

})

export const { useRegisterMutation, useLoginMutation, useResetPasswordMutation } = authApi