import React from 'react'
import './header.css'
import people from '../../assets/people.jpg'
import ai from '../../assets/ai.jpeg'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'> Here is some sample text</h1>
        <p> Here is some sample text Here is some sample text Here is some sample text Here is some sample text Here is some sample text Here is some sample text Here is some sample text Here is some sample text Here is some sample text Here is some sample text Here is some sample text Here is some sample text</p>
        <div className='gpt3__header-content__input'>
          <input type='emal' placeholder='Your email address.'></input>
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt="people"/>
          <p>This many people requested access</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
          <img src={ai} alt="ai"/>
      </div>
    </div>
  )
}

export default Header
