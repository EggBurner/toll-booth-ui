import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { CreateLinkResponse, CreateLinkRequest, Link, LinkRequest, LinkResponse } from "@/types/Link";

export const linkApi = createApi({
    reducerPath: "linkApi",

    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL,
    }),

    tagTypes: ["Link"],

    endpoints: (builder) => ({
        getLinks: builder.query<Link[], LinkRequest>({
            query: (linkData) => ({
                url:"/getLinks",
                method: "POST",
                body: linkData
            }),
            transformResponse: (response: LinkResponse) => response.links,
            providesTags: (result) =>
                result
                    ? [...result.map(({ _id }) => ({ type: "Link" as const, id: _id })), { type: "Link" as const, id: "LIST" }]
                    : [{ type: "Link" as const, id: "LIST" }]
        }),
        createLink: builder.mutation<CreateLinkResponse, CreateLinkRequest>({
            query: (linkData) => ({
                url:"/shortner",
                method: "POST",
                body: linkData
            }),
            invalidatesTags: [{ type: "Link", id: "LIST" }]
        })
    })
})

export const { useGetLinksQuery, useCreateLinkMutation } = linkApi