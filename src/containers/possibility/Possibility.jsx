import './possibility.css'
import { HiMiniMinus } from "react-icons/hi2";
import retro from '../../assets/retro.png'


export const Possibility = () => {
  return (
    <>
       <section className='gpt3__possibility'>
          <article className='gpt3__possibility-izquierdo'>
            <h1>The future is now, and you just need to realize it.
               Step into the Future Today and Make It Happen.</h1>
            <p>Request Early Access to Get Started</p>    
          </article>
          <article className='gpt3__possibility-derecho'>
              <img src={retro}/>
              <ul className='gpt3__possibility-derecho__titulos'>
                  <li>
                    <HiMiniMinus color='#151515'size={30}/>
                    <p>Multipurpose Chatbots</p>
                  </li>
                  <li>
                    <HiMiniMinus color='#151515'size={30}/>
                    <p>Advanced Generative Models</p>
                  </li>
                  <li>
                    <HiMiniMinus color='#151515'size={30}/>
                    <p>Exploring Existential Fears</p>
                  </li>
                  <li>
                    <HiMiniMinus color='#151515'size={30}/>
                    <p>Applications in the Pharmaceutical Industry</p>
                  </li>
              </ul>

              <ul className='gpt3__possibility-derecho__descripcion'>
                  <li>
                    <p>GPT-4 is likely to integrate image and video recognition with text in addition to dealing with natural language. </p>
                  </li>
                  <li>
                    <p>Models capable of autonomously generating text, images and other content have increased greatly. </p>
                  </li>
                  <li>
                    <p>The discussion about regulation, ethics and superintelligence will become increasingly relevant. Society must adapt </p>
                  </li>
                  <li>
                    <p>AI models are expected to help in the development of new drugs and the optimization of clinical trials. </p>
                  </li>
              </ul>


          </article>
       </section>
    </>
  )
}

              
              







    