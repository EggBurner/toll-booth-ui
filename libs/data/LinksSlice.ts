import { createSlice } from "@reduxjs/toolkit";

import { linkApi } from "@/services/linkApi";
import type { Link } from "@/types/Link";

interface LinksState {
    items: Link[];
}

const initialState: LinksState = {
    items: [],
};

const linksSlice = createSlice({
    name: "links",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            linkApi.endpoints.getLinks.matchFulfilled,
            (state, action) => {
                state.items = action.payload;
            }
        );
    },
});

export default linksSlice.reducer;
