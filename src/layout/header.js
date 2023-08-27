import React, { useState } from 'react';
import "../assets/styles/layout/header.scss"
import logo from "../assets/images/logo.png"
import { Link, useNavigate } from 'react-router-dom'

export const Header = () => {
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
            <li className='nav-item'><Link to={"/"} className="nav-link active text-uppercase pointer text-decoration-none">Home</Link></li>
            <li className='nav-item'><Link to={"/about"} className="nav-link text-uppercase pointer text-decoration-none">About</Link></li>
            <li className='nav-item'><Link className="nav-link text-uppercase pointer text-decoration-none service pe-3">Service</Link>
              <div className='sub-menu'>
                <ul className='ps-0 py-4 bg-white'>
                  <li><Link to={"/hospitals-providers"} className="text-uppercase pointer text-decoration-none">Hospitals & Providers</Link></li>
                  <li><Link to={"/payer-services"} className="text-uppercase pointer text-decoration-none">Payer Services</Link></li>
                </ul>
              </div>
            </li>
            <li className='nav-item'><Link to={"/our-clients"} className="nav-link text-uppercase pointer text-decoration-none">Our Clients</Link></li>
            <li className='nav-item'><Link to={"/blogs"} className="nav-link text-uppercase pointer text-decoration-none">Blogs</Link></li>
            <li className='nav-item'><Link to={"/contact"} className="nav-link text-uppercase pointer text-decoration-none">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>

  )
}
