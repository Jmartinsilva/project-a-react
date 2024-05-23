import './footer.css'
export const Footer = () => {
  return (
    <>
      <div className='gpt3__footer'>
        <div className='gpt3__footer-heder'>
          <h1>Do you wish to step into the future before others?</h1>
          <button type='button'>Request Early Access</button>
        </div>

        <div className='gpt3__footer-boody'>
          <ul className='gpt3__footer-boody__links'>
            <h2>Links</h2>
            <li>Overons</li>
            <li>Social Media</li>
            <li>Counters</li>
          </ul>

          <ul className='gpt3__footer-boody__company'>
            <h2>Company</h2>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Directivos</li>
          </ul>

          <ul className='gpt3__footer-boody__values'>
            <h2>values</h2>
            <li>Accessibility</li>
            <li>Environment</li>
            <li>Privacy</li>
          </ul>

        </div>

        <div className='gpt3__footer-footer'> 
            <h2 >Chat GPT4 </h2>
            <h6> 😎 © 2024</h6>
        </div> 
      </div>

    </>  
  )
}