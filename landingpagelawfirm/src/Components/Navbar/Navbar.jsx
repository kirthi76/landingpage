import React from 'react'
import './Navbar.css';
import { ReactComponent as Logo }  from "../../assests/Logo.svg";



const Navbar = () => {
    const MenuBar = ["Home", "Attroneys", "Practice Areas", "About Us"];
  return (
    <div className='navbar-wrapper'>
      <div className='header-icon'>
        <Logo />
      </div>
      <div className='menubar-wrapper'>
        <ul>
        {MenuBar.map((item,id) => (
            <li key={id}>{item}</li>
        ))}
        </ul>
      </div>
      <button className='navbar-button'>
        Contact Now
      </button>
    </div>
  )
}


export default Navbar;