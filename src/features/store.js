import {configureStore} from '@reduxjs/toolkit'
import eventReducer from './eventSlice'

export default configureStore({
    reducer: {
        events: eventReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ //error de mutacion
        immutableCheck: false,
        serializableCheck: false,
    })
})