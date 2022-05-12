import React from 'react'
import { Link } from 'react-router-dom'
import Cart from '../buttons/Cart'
import Login from '../buttons/Login'
import Signup from '../buttons/Signup'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid py-2">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/'>
          <a className="nav-link active" aria-current="page" >Home</a>
          </Link>
        </li>
        <li className="nav-item">
       
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to='/mobile'><a className="dropdown-item" >Mobiles</a></Link></li>
            <li><Link to='/accessory'><a className="dropdown-item" >Accessories</a></Link></li>
           
          </ul>
        </li>
        <Link to='/about'>
        <a className="nav-link" >About us</a>
        </Link>
      </ul>
     <a  className='navbar-brand mx-auto fw-bold'>DIGITAL MART</a>
    </div>
    <Login/>
    <Signup/>
    <Cart/>
  </div>
</nav>
    </>
  )
}

export default Navbar