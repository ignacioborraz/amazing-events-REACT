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
        getOneEvent: builder.query({
            query : (id) => '/events/'+id,
            transformResponse: res => res.response
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

export default eventsAPI
export const {useGetAllEventsQuery,useGetOneEventQuery,useLikeDislikeMutation} = eventsAPI
