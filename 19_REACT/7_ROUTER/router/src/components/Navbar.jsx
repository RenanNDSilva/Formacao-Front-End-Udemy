import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      {/* <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link> */}
      <NavLink to="/" className={({isActive}) => (isActive ? "active" : "")}>Home</NavLink>
      <NavLink to="/contact">Contatos</NavLink>
    </div>
  )
}

export default Navbar
