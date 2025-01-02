import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    language : '',
    schoolName : '',
    schoolAddress : '',
    schoolCategory : '',
    schoolEmail : '',
    schoolPassword : ''
}

const authSlice = createSlice({
    name : 'authentication',
    initialState,
    reducers : {
        setLanguage : (state,action) => {
            state.language = action.payload
        },
        setSchoolDetails : (state,action) => {
            state.schoolName = action.payload.name,
            state.schoolAddress = action.payload.address
        },
        setSchoolCategory : (state,action) => {
            state.schoolCategory = action.payload
        },
        setCredentials : (state,action) => {
            state.schoolEmail = action.payload.email,
            state.schoolPassword = action.payload.password
        }
    }
})

export const {setLanguage,setSchoolDetails,setSchoolCategory,setCredentials} = authSlice.actions
export default authSlice.reducer