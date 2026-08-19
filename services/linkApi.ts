import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { LinkRequest, LinkResponse, Link } from "@/types/Link";

export const linkApi = createApi({
    reducerPath: "linkApi",

    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL,
    }),

    endpoints: (builder) => ({
        getLinks: builder.query<Link[], LinkRequest>({
            query: (linkData) => ({
                url:"/getLinks",
                method: "POST",
                body: linkData
            }),
            transformResponse: (response: LinkResponse) => response.links
        })
    })
})

export const { useGetLinksQuery } = linkApi