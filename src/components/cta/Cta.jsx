import './cta.css'
import mujer from '../../assets/mujer.svg'

export const Cta = () => {
  return (
    <>
    <div className='gpt3__cta'>
          <section className='gpt3__cta-arriba'>
            
            <img className='gpt3__cta-arriba__izq' src={mujer}/>
           
            <article className='gpt3__cta-arriba__der'>
            
              <p><b>Request Early Access to Get Started</b></p>
              <h1>The possibilities are beyond your imagination</h1>
              <p>The AI ​​has the ability to compose lyrics for fictional songs, invent humorous dialogues, and create outlandish situations with famous people. Furthermore, I can immerse myself in the description of landscapes,
                 creatures and civilizations in completely imaginary universes.</p>
            </article>

          </section>

          <div className='gpt3__cta-abajo'>
            <p>Register today & start exploring the endless possiblities.</p>
            <button type="button">Get Started</button>
          </div>
      </div>
    </>
  )
}

            

              




    
    
    