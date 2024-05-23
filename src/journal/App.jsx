import { Navigate, Route,  Routes } from "react-router-dom";
import { Brand,Cta,Navbar } from "../components";
import { Blog,Header,Possibility,WhatGP3 } from "../containers";
import './App.css';
import React from "react";








export const App = () => { 
  
  return (
    <> 
          <Navbar/>
          <Routes>
                   
                    <Route path='header' element={<Header/>}/>
                      <Route path="brand" element={<Brand/>} />
                      <Route path='whatgp3' element={<WhatGP3/>} />
                      <Route path='possibility' element={<Possibility/>} />
                      <Route path='cta' element={<Cta/>} />
                      <Route path='blog' element={<Blog/>} />
                      <Route path="/*" element={<Navigate to='/header' />} />
                      
          </Routes>
    </>
  )
                    
}
            
                    
        
      
        
        
        
        
        
      
           
          
          
          
          
          

      

    
  
  

