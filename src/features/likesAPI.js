import {
    createApi,
    fetchBaseQuery
} from '@reduxjs/toolkit/query/react'
import apiUrl from '../url'

const likesAPI = createApi({

    reducerPath: "likesAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: apiUrl
    }),

    endpoints: (builder) => ({
        likeDislike: builder.mutation({
            query: (id) => ({
                url: '/likes/'+id,
                method: 'POST',
                headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
            })
        }),
        getLikes: builder.mutation({
            query: (id) => ({
                url: '/likes?event='+id,
                method: 'GET'
            })
        }),
        myLike: builder.mutation({
            query: (data) => ({
                url: '/likes?event='+data.id+'&user='+data.userId,
                method: 'GET'
            })
        })
    })

})

export const {
    useLikeDislikeMutation,
    useGetLikesMutation,
    useMyLikeMutation
} = likesAPI

export default likesAPI
