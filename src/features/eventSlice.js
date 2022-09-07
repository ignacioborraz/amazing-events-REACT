import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import apiUrl from '../url'

export const eventSlice = createSlice({
    name: 'evt',
    initialState: {
        events: [],
    },
    reducers: {
        getAll: async (state) => {
            try {
                let res = await axios.get(apiUrl+'events')
                console.log(res.data)
                state.events = await res.data
            } catch(error) {
                console.log(error)
            }
        }
    }
})

export const { getAll } = eventSlice.actions
export default eventSlice.reducer