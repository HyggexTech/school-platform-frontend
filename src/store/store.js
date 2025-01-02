import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/store/Slices/authSlice'

//Single source of truth to handle all the data states here.
const store = configureStore({
    reducer: {
        authentication: authReducer
    },
});

export default store;