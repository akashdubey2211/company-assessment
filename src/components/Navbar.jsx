import React from 'react';
import '../assests/styles.css'
import fylloLogo from '../assests/logos/fyllo.png'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
       <img src={fylloLogo} style={{width:"120px", height:"38px"}}/>
      </div>
      <ul className="nav-links">
        {/* <li>Home</li>
        <li>About</li>
        <li>Contact</li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
