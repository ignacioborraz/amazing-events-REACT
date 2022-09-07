import {
    configureStore
} from '@reduxjs/toolkit'

import eventsSlice from './features/eventsSlice'

export default configureStore({
    reducer: {
        events: eventsSlice
    },
})
