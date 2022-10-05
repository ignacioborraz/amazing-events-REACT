import { configureStore } from '@reduxjs/toolkit'
import eventsAPI from './eventsAPI'
import authAPI from './authAPI'
import likesAPI from './likesAPI'
import authReducer from './authSlice'

export default configureStore({
    reducer: {
        [eventsAPI.reducerPath] : eventsAPI.reducer,
        [authAPI.reducerPath] : authAPI.reducer,
        [likesAPI.reducerPath] : likesAPI.reducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    })
})