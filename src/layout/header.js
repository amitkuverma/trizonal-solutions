import React, { useState } from 'react';
import "../assets/styles/layout/header.scss"
import logo from "../assets/images/logo.png"
import { Link, useNavigate } from 'react-router-dom'

export const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-sm sticky-top header">
      <div className="container ">
        <Link to={"/"} className="navbar-brand pointer logo">
          <img src={logo} alt='logo' />
          Trizonal <span className="sub">Solutions</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item"><Link to={"/"} className={`nav-link text-uppercase pointer text-decoration-none ${props.active == "home" ? "active" : ""}`}>Home</Link></li>
            <li className="nav-item"><Link to={"/about"} className={`nav-link text-uppercase pointer text-decoration-none ${props.active == "about" ? "active" : ""}`}>About</Link></li>
            <li className='nav-item'><Link className={`nav-link text-uppercase pointer text-decoration-none service pe-3 ${props.active == "service" ? "active" : ""}`}>Service</Link>
              <div className='sub-menu'>
                <ul className='ps-0 py-4 bg-white'>
                  <li><Link to={"/payer-services"} className={`nav-link text-uppercase pointer text-decoration-none ${props.active == "service" ? "active" : ""}`}>Payer Services</Link>
                    <ul className='inner-sub navbar-nav'>
                      <li className='nav-item'><a href="#vendor"  className='nav-link text-uppercase pointer text-decoration-none'>Vendor Claim System Services</a></li>
                      <li className='nav-item'><a href="#services" className='nav-link text-uppercase pointer text-decoration-none'>Implementation Services</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li className='nav-item'><Link to={"/our-clients"} className={`nav-link text-uppercase pointer text-decoration-none ${props.active == "clients" ? "active" : ""}`}>Our Clients</Link></li>
            <li className='nav-item'><Link to={"/blogs"} className={`nav-link text-uppercase pointer text-decoration-none ${props.active == "blogs" ? "active" : ""}`}>Blogs</Link></li>
            <li className='nav-item'><Link to={"/contact"} className={`nav-link text-uppercase pointer text-decoration-none ${props.active == "contact" ? "active" : ""}`}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>

  )
}
