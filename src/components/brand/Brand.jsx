import React from 'react'
import './brand.css'
import { google, slack, atlassiann, dropbox, shopify} from './imports'

const Brand = () => {
  return (
    <div className='gpt3__brand section_padding'>
      <div>
        <img src={google} alt='google' />
      </div>
      <div>
        <img src={slack} alt='slack' />
      </div>
      <div>
        <img src={atlassiann} alt='atlassiann' />
      </div>
      <div>
        <img src={dropbox} alt='dropbox' />
      </div>
      <div>
        <img src={shopify} alt='shopify' />
      </div>
      <a>Brand</a>
    </div>
  )
}

export default Brand
