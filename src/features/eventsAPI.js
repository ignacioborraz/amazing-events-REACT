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
            query : (page) => '/events?limit=18&order=desc&page='+page
        }),
        getOneEvent: builder.mutation({
            query: (id) => ({
                url: '/events/'+id,
                method: 'GET'
            })
        }),
        createEvent: builder.mutation({
            query: (data) => ({
                url: '/events',
                method: 'POST',
                body: data,
                headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
            })
        })
    })

})

export const {
    useGetAllEventsQuery,
    useGetOneEventMutation,
    useCreateEventMutation
} = eventsAPI

export default eventsAPI
