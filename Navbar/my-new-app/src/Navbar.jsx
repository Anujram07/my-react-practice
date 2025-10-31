import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div id='nav'>
      <Link to='/'><p>Home</p></Link>
      <Link to='/about'><p>About</p></Link>
      <Link to='/login'><p>Login</p></Link>
      <Link to='/signin'><p>SignUp</p></Link>
    </div>
  )
}

export default Navbar
