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
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header