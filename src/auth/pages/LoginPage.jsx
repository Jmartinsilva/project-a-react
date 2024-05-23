import './loginPage.css'
import { FaGoogle } from "react-icons/fa";
import React, { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { checkingAuth, startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth/thunks';
import {  NavLink } from 'react-router-dom';

export const LoginPage = () => {
    const dispatch = useDispatch()
    
    //boton de formulario checking
    const { status} = useSelector( state => state.auth )
    const isAuthenticated = useMemo(() => status === 'authenticated', [status]);
    
    const loginSubmit = async (data) => {
      try {
        const primera = dispatch(checkingAuth(data))
        const segunda = dispatch(startLoginWithEmailPassword(data.email,data.password))
        if(primera && segunda){ return isAuthenticated}
        console.log(`El registro es ${data} `)
        reset()
      } catch (error) {
        console.error("Error al registrar el usuario:", error.message);
        reset()
      }
    }
       
      
    //boton google authenticator
    const onGoogleSingIn = () => {
      console.log('google');
      
      dispatch(startGoogleSignIn())
      reset()
     
    }
    
    //validaciones de formulario en tiempo real.  
const {handleSubmit, register, formState: { errors},watch,trigger,reset } = useForm();

const [colorInput, setColorInput] = useState('#FFFFFF')

const emailValidation = {
  required: {
    value: true,
    message: 'El correo es requerido'
  },
  pattern: {
    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
    message: 'El correo no es valido'
  }
};
const email = watch('email')
useEffect(() => {
 
  const validateEmail = async () => {
    const result = await trigger('email');
    if (result) {
      setColorInput('#FFFFFF');
    } else {
      setColorInput('#f09ba6');
    }
  };

  validateEmail();
}, [email, trigger]);

return (

  <div className='login'>
        <form onSubmit={handleSubmit(loginSubmit)}  className='login__form'  >
            
            <h1>Login</h1>
             
            <input
            style={{ background: colorInput }}
            type='email'
            placeholder="Ingrese su email"
            {...register('email', emailValidation)}
            />
            {errors.email && <span>{errors.email.message}</span>}
               
            <input  
            type='password' 
            placeholder="Password"
            {...register('password',{
              required: true,
              minLength: 6,
            })}
            />
            {errors.password?.type === 'required' && <span>Password es requerido</span>}
            {errors.password?.type === 'minLength' && <span>Minimo 6 caracteres</span>}
            <button 
            className='login__form-login' 
            type="submit"
            
            
            >
              Login
            </button>
            
            <button
            className='login__form-authGoogle'
            type="button"
            onClick={onGoogleSingIn}
            
            > {<FaGoogle/>} Google
            
            </button>
            
            <h2><NavLink to= '/register'>Crear una Cuenta</NavLink></h2>
            
        </form>
  </div>
)
}
              

 














            
             
            
              

            

              







    
  




    
   



    
  
 
  
  
 















 

  



                
              
           
            
            
            


            
  

       


            
            

            
            
            
            
            
            
            
        
            
            



     



