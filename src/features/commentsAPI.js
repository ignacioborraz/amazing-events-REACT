import {
    createApi,
    fetchBaseQuery
} from '@reduxjs/toolkit/query/react'

import apiUrl from '../url'

const commentsAPI = createApi({
    reducerPath: "commentsAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: apiUrl
        }),

    endpoints: (builder)=>({
        getComments: builder.query({
            query: (id) => '/comments/?itinerary='+id,
            transformResponse: (res) => res.response                
        }),
        createComment: builder.mutation({
            query: (comment) =>({
                url: '/comments',
                method:'POST',
                body: comment
            })
        }),                    
        patchComment: builder.mutation({
            query: ({id,data}) =>({
                url: '/comments/'+id,
                method:'PATCH',
                body: data
            }),
            transformResponse: res => res.response
            }),
        deleteComment: builder.mutation({
            query: (id) =>({
                url: '/comments/'+id,
                method:'DELETE'
            })
        })
    })
})

export default commentsAPI
export const {useGetCommentsQuery,useCreateCommentMutation,usePatchCommentMutation,useDeleteCommentMutation} = commentsAPI