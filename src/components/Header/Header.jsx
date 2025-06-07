import React from 'react'
import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
  return (
    <>
      <div className='list'>
        <img className='img' src={logo} alt='logo'/>
        <ul className='list-ul'>
          <li className='list-items'>Home</li>
          <li className='list-items'>Services</li>
          <li className='list-items'>Pricing</li>
          <li className='list-items'>Contact</li>
        </ul>
      </div>
    </>
  )
}

export default Header