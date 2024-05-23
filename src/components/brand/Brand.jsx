import './brand.css'
import {google,slack,atlassian,dropbox,shopify} from './import'

export const Brand = () => {
  return (
    
      <figure className="gpt3__brand">
        <div>
          <img src={google} />
        </div>
        <div>
          <img src={slack} />
        </div>
        <div>
          <img src={atlassian} />
        </div>
        <div>
          <img src={dropbox} />
        </div>
        <div>
          <img src={shopify} />
        </div>
      </figure>
      
    
  )
}