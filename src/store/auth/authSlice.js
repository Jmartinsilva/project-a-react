
import { createSlice } from '@reduxjs/toolkit';

// Todo el codigo es sincrono 
// Creamos el state 
export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated' /* 'checking', 'authenticated', 'not-authenticated' */,
        uid: null,
        email:null,
        displayName: null,
        photoURL:null,
        errorMessage: undefined,
    },
// El reducer recibe state y accion con su payload (cualquier tipo de dato) 
    reducers: {
        login: (state, {payload} ) => {
            state.status = 'authenticated', // 'checking', 'not-authenticated', 'authenticated'
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.errorMessage = null;
        },

        logout: (state, {payload} ) => {
            state.status = 'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = payload?.errorMessage;
        },

        checkingCredentials: (state ) => { 
            state.status = 'checking' //si esta o no autenticado
        },
         
            
    }
});


// Se generan creadores de acciones para cada función reductora de casos.
// Accion creator funcion-acciones que crean funciones
export const { login,logout,checkingCredentials } = authSlice.actions;