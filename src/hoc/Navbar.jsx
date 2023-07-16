import React from 'react';
import "../css/Navbar.css";
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <li><Link to='/'>Home</Link></li>
        <li><Link to='users'>Users</Link></li>
        <li><Link to='About'>About</Link></li>
        <li><Link to='Gadget'>GadgetBlog</Link></li>
        <li><Link to='blog'>Blog</Link></li>
        <li><Link to='addblog'>NewBlog</Link></li>
      
      </div>
    </div>
  </div>
</nav>
    );
}

export default Navbar;
