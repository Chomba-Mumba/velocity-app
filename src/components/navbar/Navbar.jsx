import React , {useState} from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo512.png'
import './navbar.css'

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#velocity">What is velocity</a></p>
  <p><a href="#posibility">Open AI</a></p>
  <p><a href="#features">Case Studies</a></p>
  <p><a href="#blog">Library</a></p>
  </>
)
const Navbar = () => {
  const[toggleMenu, setToggleMenu] = useState(false);
  
  return (
    <div className="velocity__navbar">
      <div className="velocity__navbar-links">
        <div className="velocity__navbar-links_logo">
          <img src={logo}></img>
        </div>
        <div className="velocity__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="velocity__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="velocity__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
        }
        {toggleMenu && (
          <div className='velocity__navbar-menu_container scale-up-center'>
            <div className='velocity__navbar-menu_contaner-links'>
              <Menu />
              <div className="velocity__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
