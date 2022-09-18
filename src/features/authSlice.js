import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    
    name: 'auth',
    
    initialState: {
        user: null,
        userId: null,
        role: null,
        logged: false
    },
    
    reducers: {
        setCredentials: (state, action) => {
            state.user = action.payload
            state.userId = action.payload.id
            state.role = action.payload.role
            state.logged = true
        },
        deleteCredentials: (state, action) => {
            state.user = null
            state.userId = null
            state.role = null
            state.logged = false
        }
    }

})

export const {
    setCredentials,
    deleteCredentials
} = authSlice.actions

export default authSlice.reducer