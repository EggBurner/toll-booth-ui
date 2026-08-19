import { configureStore } from "@reduxjs/toolkit";

import { authApi } from "@/services/authApi";
import { linkApi } from "@/services/linkApi";
import authReducer from "@/libs/authSlice";
import linksReducer from "@/libs/data/LinksSlice";

export const store = configureStore({
    reducer:{
        [authApi.reducerPath]: authApi.reducer,
        auth: authReducer,
        [linkApi.reducerPath]: linkApi.reducer,
        links: linksReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware, linkApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch