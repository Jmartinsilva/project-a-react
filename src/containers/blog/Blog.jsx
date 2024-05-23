import './blog.css'
import { imagenes } from './index'




export const Blog = () => {
  return (
    <>
        <div className='blog'>
          <h1>We are blogging about the ongoing events.</h1>
          <div className='blog__container'>
              
            <div className='blog__container-large'>
              <img src={imagenes.fotoE} />
              <h3>Álex Castaño</h3>
              <h2> The future is in GPT-4 and artificial intelligence. Can we explore together?</h2>
              <p>Latitude -31.4135 Longitude -64.18105</p>
            </div>
              
            <div className='blog__container-primero'>
              <img src={imagenes.fotoD}/>
              <h3>Álex Castaño</h3>
              <h2>The future is in GPT-4 and artificial intelligence. Can we explore together?</h2>
              <p>Latitude -31.4135 Longitude -64.18105</p>
            </div>

            <div className='blog__container-segundo'>
              <img src={imagenes.fotoA}/>
              <h3>Álex Castaño</h3>
              <h2> The future is in GPT-4 and artificial intelligence. Can we explore together?</h2>
              <p>Latitude -31.4135 Longitude -64.18105</p>
            </div>

            <div className='blog__container-tercero'>
              <img src={imagenes.fotoB}/>
              <h3>Álex Castaño</h3>
              <h2> The future is in GPT-4 and artificial intelligence. Can we explore together?</h2>
              <p>Latitude -31.4135 Longitude -64.18105</p>
            </div>

            <div className='blog__container-cuarto'>
              <img src={imagenes.fotoC} />
              <h3>Álex Castaño</h3>
              <h2> The future is in GPT-4 and artificial intelligence. Can we explore together?</h2>
              <p>Latitude -31.4135 Longitude -64.18105</p>
            </div>
          
          </div>
        </div>
    </>
  )
}
      
      
      
      
      