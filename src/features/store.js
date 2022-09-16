import {configureStore} from '@reduxjs/toolkit'
import eventsAPI from './eventsAPI'

export default configureStore({
    reducer: {
        [eventsAPI.reducerPath] : eventsAPI.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    })
})