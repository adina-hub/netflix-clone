import React from 'react'
import { useNavigate } from "react-router-dom"
import './Nav.css'
import { useState, useEffect } from 'react'

function Nav() {

  const [show, handleShow] = useState(false)
  const history = useNavigate()

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true)
    }
    else {
      handleShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar)
    return () => window.removeEventListener("scroll", transitionNavbar)
  }, [])
  

  return (
    <div className={`nav ${show && 'nav__black'} `}>
      <div className='nav__contents'>
        <img className='nav__logo' 
            onClick={ () => history("/") }
            src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' 
            alt='' 
        />
        <img className='nav__avatar'
           onClick={ () => history("/profile") }
           src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' 
           alt=''
        />
      </div>
    </div>
  )
}

export default Nav