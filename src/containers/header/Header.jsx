import './header.css'
import Group81 from '../../assets/Group 81.png'
import hombre from '../../assets/hombre.svg'
import { Brand, Cta } from '../../components';
import { WhatGP3 } from '../whatsGP3/WhatGP3';
import { Possibility } from '../possibility/Possibility';
import { Blog } from '../blog/Blog';
import { Footer } from '../footer/Footer';





export const Header = () => {
  return (
    <>
    
      <div className="gpt3__bloque" id="home">
        <section className='gpt3__bloque-izquierdo'>
            <article className='gpt3__bloque-izquierdo__superior'>
              <h1>Let's learn with emerging AI technology GPT-4.</h1>
              
              <p>In the realm of robotics, artificial intelligence (AI) has emerged as a key instrument. AI is used to enhance speech recognition, image perception, language translation, and decision-making. 
                Robots (software) can now carry out commands and tasks more effectively thanks to artificial intelligence (AI) applied to mobile robotics.</p>

            </article>
            <div className='gpt3__bloque-izquierdo__medio'>
              <input type="email" placeholder="Your Email Address" />
              <button type="button">Get Started</button>
            </div>
                
              
            <div className='gpt3__bloque-izquierdo__inferior'>
              <img src={Group81}/> 
              <p> 2,150  people requested access a visit in last 24 hours</p>
            </div>
        </section>

        
          
        <aside className='gpt3__bloque-derecho'>
            <img className='gpt3__bloque-derecho__hombre' src={hombre}/>
        </aside>
          
      </div>
      <Brand/>
      <WhatGP3/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>


    </>        
  )

};
          


    

