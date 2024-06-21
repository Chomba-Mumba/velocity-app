import React from 'react'
import './whatGPT3.css'

const whatGPT3 = () => {
  return (
    <div>
      <div className='gpt3__whatgpt3 section__margin' id="whatgpt3">
        <div className='gpt3__whatgpt3-feature'>
          <Feature />
        </div>
        <div className='gpt3__whatgpt3-heading'>
          <h1 className='gradient-text'> This is a sample heading this is a sample heading</h1>
          <p> Explore the Library</p>
        </div>
        <div className='gpt3__whatgpt3-container'>
          <Feature />
          <Feature />
          <Feature />
        </div>
      </div>
    </div>
  )
}

export default whatGPT3
