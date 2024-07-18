// import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/home" id="id1">Home</Link>
      <h1>The Music Streaming Website</h1>
      <Link to="/side" id="id2">Menu</Link>
    </nav>
  );
}

export default Navbar;