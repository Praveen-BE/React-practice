import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import type { Random } from "./types";

export const randomApi = createApi({
    reducerPath: "randomApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://bored-api.appbrewery.com/" }),
    endpoints: (builder)=>({
        getRandomData: builder.query({
            // query: ()=>"activity/3943506",
            query: ()=>"random",
        }),
    }),
});

export const { useGetRandomDataQuery } = randomApi;


