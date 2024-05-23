import { useForm } from 'react-hook-form';
import './registerPage.css'
import { NavLink } from 'react-router-dom';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';



export const RegisterPage = () => {
  
  const {handleSubmit, register, formState: { errors,isValid},reset } = useForm({mode:'onChange'});
  console.log(errors)
  
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
  const passwordlValidation = {
    required:{
      value:true,
      mesasge: 'Password es requerido',
    },
    minLength:{
      value:6,
      message:'Password debe tener al menos 6 caracteres'
      
    }
    
  }
  const displayNameValidation = {
    required:{
      value: true,
      message:'El nombre es requerido'
    },
    minLength:{
      value:2,
      message:'El nombre debe tener al menos 2 caracteres'
    },
    maxLength:{
      value:20,
      message:'El nombre debe tener maximo 20 caracteres'
    }
    
  }
  //boton de formulario checking
  const dispatch = useDispatch()

  const { status} = useSelector( state => state.auth )
  const isAuthenticated = useMemo(() => status === 'authenticated', [status]);

  const registerSubmit = async (data) => {
    try {
      const segunda = dispatch( startCreatingUserWithEmailPassword(data.email,data.password,data.displayName) )
      if( segunda.ok ){ return isAuthenticated}
      console.log(`Se registro usuario: ${data.displayName}` )
      reset()
    } catch (error) {
      console.error("Error al registrar el usuario:", error.message);
    }
      
  }
  return (
    <div className='register'>
          <form onSubmit={handleSubmit(registerSubmit)} className='register__form'>
              
              <h1>Registrarse</h1>
              <input  
              type='text' 
              placeholder="Nombre Completo"
              label=' displayName'
              {...register('displayName', displayNameValidation)}
              />
              {errors.displayName && <span>{errors.displayName.message}</span>}

              <input  
              type='email' 
              placeholder="Ingrese su email"
              label='email'
              {...register('email', emailValidation)}
              />
              {errors.email && <span>{errors.email.message}</span>}
              
              <input 
              type='password' 
              placeholder="Ingrese su contraseña"
              label='password'
              {...register('password',passwordlValidation)}
              />
              {errors.password?.type === 'required' && <span>Password es requerido</span>}
              {errors.password?.type === 'minLength' && <span>Minimo 6 caracteres</span>} 
              
              
              <button  
              type='submit' 
              disabled={!isValid }  
              > 
              Crear cuenta
              
              </button>
              
              <h2><NavLink to= '/login'>Ya tienes una cuenta?</NavLink></h2>

          </form>
    </div>
  )
}

    
   
    



 


              
              
              
              

              
             
              
              
                
              
             
              
              
             
