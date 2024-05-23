import { RiMenuFill , RiCloseLine} from 'react-icons/ri'
import './navbar.css'
import logo from '../../assets/logo.jpg'
import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export const Navbar = () => {

  const navigate = useNavigate()

  const onLogin = () => {
    navigate ('auth/register',{remplace:true})
  }

   const [toggleMenu, setToggleMenu] = useState(false)
   
  
  return (
  <>
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img  src={logo} alt='logo'/>
        </div>
      
        <nav  className='gpt3__navbar-links_containers' >
           
            <Link to='/header'>Home</Link>
            <Link to='/whatgp3'>What is Gpt3</Link>
            <Link to='/possibility'>Opeen AI</Link>
            <Link to='/cta'>Clases Studies</Link>
            <Link to='/blog'>Library</Link>
            

        </nav>
        

        <div className='gpt3__navbar-sign'>
          <p><NavLink to= 'auth/login'>Sign In</NavLink></p>
          <button  onClick={onLogin} type='button'>Sign Up</button>
        </div>
        <div className='gpt3__navbar-menu'>
          {toggleMenu
          ? <RiCloseLine color='#0B0A0A'size={30} onClick={()=> setToggleMenu(false)}/>
          : <RiMenuFill color='#0B0A0A'size={30} onClick={()=> setToggleMenu(true)}/>
          }
          {toggleMenu && (
              <>
                <nav className='gpt3__navbar-links_containers_menu scale-up-center'>
                  <Link to='/header'>Home</Link>
                  <Link to='/whatgp3'>What is Gpt3</Link>
                  <Link to='/possibility'>Opeen AI</Link>
                  <Link to='/cta'>Clases Studies</Link>
                  <Link to='/blog'>Library</Link>
                    <div className='gpt3__navbar-sign_menu'>
                      <p><NavLink to= 'auth/login'>Sign In</NavLink></p>
                      <button  onClick={onLogin} type='button'>Sign Up</button>
                      
                    </div>
                </nav>
               
              </>    
          )}
        </div>
      </div>
    </div>
  </>       



        





  
    
    
  )
}
           
            
            
            
            