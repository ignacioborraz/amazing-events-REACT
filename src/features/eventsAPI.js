import {
    createApi,
    fetchBaseQuery
} from '@reduxjs/toolkit/query/react'

import apiUrl from '../url'

const eventsAPI = createApi({
    reducerPath: "eventsAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: apiUrl
    }),

    endpoints: (builder) => ({
        getAllEvents: builder.query({
            query : () => '/events'
        })
    })
})

export default eventsAPI
export const {useGetAllEventsQuery} = eventsAPI
