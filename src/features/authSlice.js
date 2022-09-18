import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    
    name: 'auth',
    
    initialState: {
        data: null
    },
    
    reducers: {
        signIn: (state, action) => {
            console.log(action.payload);
            state.data = action.payload.data
        },
        signOut: (state, action) => {
            state.data = null
        }
    }

})

export const { signIn, signOut } = authSlice.actions
export default authSlice.reducer