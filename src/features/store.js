import {configureStore} from '@reduxjs/toolkit'
import eventReducer from './eventSlice'
import eventsAPI from './eventsAPI'

export default configureStore({
    reducer: {
        events: eventReducer,
        [eventsAPI.reducerPath] : eventsAPI.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    })
})