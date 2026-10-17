import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import useIsOnline from '../utils/useIsOnline'
import {useContext} from 'react'
import useUserName from '../utils/useCreateContext'

const Header = () => {

  let isOnline = useIsOnline()
  let Obj = useContext(useUserName)
  return (
    <div className='header'>
      <img className='header-logo' src='https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000'/>
 
<input className='header-inp' placeholder='Search here...'/>

      <ul className='header-ul'>
        
          <li>{isOnline ? <p> Online </p> : <p>Offline </p>} </li>
    <li>{Obj.name}</li>
        <Link className='header-link' to='/'>Home</Link>
        <Link className='header-link' to="/contact">Contact</Link>
        <Link className='header-link' to='/about'>About</Link>
        <Link className='header-link' to='/settings'>Settings</Link>
        <Link className='header-link' to='/grocery'>Grocery</Link>
      </ul>
    </div>
  )
}

export default Header
