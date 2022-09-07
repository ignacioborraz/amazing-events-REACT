import { createSlice } from '@reduxjs/toolkit'
import data from './data'

export const eventsSlice = createSlice({
    name : 'events',

    initialState : {
        events : []
    },

    reducers : {
        fetchFromServer : (state) => {
            state.events = data
        },

        fetchById: (state) => {}
    }
})

export const {fetchFromServer} = eventsSlice.actions

export default eventsSlice.reducer
