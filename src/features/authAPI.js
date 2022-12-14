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
        signUp: builder.mutation({
            query: (user) => ({
                url: '/auth/signup',
                method: 'POST',
                body: user
            })
        }),
        signIn: builder.mutation({
            query: (user) => ({
                url: '/auth/signin',
                method: 'POST',
                body: user,
                transformResponse: res => res.data
            })
        }),
        signInToken: builder.mutation({
            query: () => ({
                url: '/auth/token',
                method: 'GET',
                headers: {Authorization: 'Bearer '+localStorage.getItem('token')}
            })
        }),
        signOut: builder.mutation({
            query: () => ({
                url: '/auth/signout',
                method: 'POST',
                headers: {Authorization: 'Bearer '+localStorage.getItem('token')}
            })
        })
    })

})

export const {
    useSignUpMutation,
    useSignInMutation,
    useSignInTokenMutation,
    useSignOutMutation
} = authAPI

export default authAPI