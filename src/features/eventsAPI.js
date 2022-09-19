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
        }),
        getOneEvent: builder.mutation({
            query: (id) => ({
                url: '/events/'+id,
                method: 'GET'
            })
        }),
        likeDislike: builder.mutation({
            query: (id) => ({
                url: '/events/like/'+id,
                method: 'PATCH',
                headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
            })
        })
    })

})

export const {
    useGetAllEventsQuery,
    useGetOneEventMutation,
    useLikeDislikeMutation
} = eventsAPI

export default eventsAPI
