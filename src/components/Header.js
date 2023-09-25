import React from 'react';
import './Header.css';


function Header() {
  return (
    <div className='header'>
    <div className='brand'>
      <h1>Arnav Bag House Pvt Ltd</h1>
    </div>
      <nav className='navigation'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header