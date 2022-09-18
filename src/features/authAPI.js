import {
    createApi,
    fetchBaseQuery
} from '@reduxjs/toolkit/query/react'
import apiUrl from '../url'

const authAPI = createApi({

    reducerPath: "authAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: apiUrl
    }),

    endpoints: (builder) => ({
        signIn: builder.mutation({
            query: (user) => ({
                url: '/auth/signin',
                method: 'POST',
                body: user,
                transformResponse: res => res.response
            })
        })
    })

})

export default authAPI
export const {useSignInMutation} = authAPI
