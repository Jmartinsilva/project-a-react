import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import { FirebaseAuth } from './config';


const googleProvider = new GoogleAuthProvider();


// autenticar con como Google, Facebook o Twitter
export const singInWithGoogle = async() => {
    try {
        
        const result = await signInWithPopup(FirebaseAuth, googleProvider );
        //const credentials = GoogleAuthProvider.credentialFromResult( result );
        const { displayName, email, photoURL, uid } = result.user;
        
        return {
            ok: true,
            // User info
            displayName, email, photoURL, uid,
        }
    } catch (error) {
        
        //const errorCode = error.code;
        const errorMessage = error.message;
    
        return {
            ok: false,
            errorMessage,
        }
    }
}
    
//registrarse por primera vez
export const registerUserWithEmailPassword = async({ email, password, displayName }) => {

    try {
        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL } = resp.user;

        await updateProfile( FirebaseAuth.currentUser, { displayName });

        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch (error) {
        //console.log(error);
        return { ok: false, errorMessage: error.message }
    }

}
// registrarse con login cuando se tiene cuenta 
export const loginWithEmailPassword = async({ email, password }) => {
    
    try {
        const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password );
        const { email, password } = resp.user;
        
        return {
            ok: true,
            email, password
        }

    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }
}


// salir
export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut();
}
        
    



