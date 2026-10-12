import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <img className='header-logo' src='https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000'/>
 
<input className='header-inp' placeholder='Search here...'/>

      <ul className='header-ul'>
        <Link className='header-link' to='/'>Home</Link>
        <Link className='header-link' to="/contact">Contact</Link>
        <Link className='header-link' to='/about'>About</Link>
        <Link className='header-link' to='/settings'>Settings</Link>
      </ul>
    </div>
  )
}

export default Header
