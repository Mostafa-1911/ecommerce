import React from 'react'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container">
    <a className="navbar-brand" href="#">FreshCart</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
        <li className="nav-item">
          <Link className="nav-link" to='home'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='products'>Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='cart'>Cart</Link>
        </li>
      </ul>


      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to='login'>Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='register'>Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='logout'>Logout</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    
    </>
  )
}
