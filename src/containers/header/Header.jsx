import React from 'react'
import './header.css'
import people from '../../assets/people.jpg'
import ai from '../../assets/ai.jpeg'

const Header = () => {
  return (
    <div className='velocity__header section__padding' id='home'>
      {/* <div className='velocity_header-content_accordion'>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div> */}
      <div className='velocity__header-content'>
        <h1 className='gradient__text'> Here is some sample text</h1>
        <p> Here is some sample text Here is some sample text Here is some sample text Here is some sample text Here is some sample text Here is some sample text Here is some sample text Here is some sample text Here is some sample text Here is some sample text Here is some sample text Here is some sample text</p>
        <div className='velocity__header-content__input'>
          <input type='emal' placeholder='Your email address.'></input>
          <button type='button'>Get Started</button>
        </div>
        <div className='velocity__header-content__people'>
          <img src={people} alt="people"/>
          <p>This many people requested access</p>
        </div>
      </div>
      <div className='velocity__header-image'>
          <img src={ai} alt="ai"/>
      </div>
    </div>
  )
}

export default Header
