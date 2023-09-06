import React, { useState } from 'react';
import "../assets/styles/layout/header.scss"
import logo from "../assets/images/logo.png"
import { Link } from 'react-router-dom'

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
        <div className="collapse navbar-collapse justify-content-end menu_container" id="navbarSupportedContent">
          <ul className="navbar-nav main_menu hover_menu">
            <li className="nav-item btm-br"><Link to={"/"} className={`nav-link text-uppercase pointer text-decoration-none ${props.active == "home" ? "active" : ""}`}>Home</Link></li>
            <li className="nav-item btm-br"><Link to={"/about"} className={`nav-link text-uppercase pointer text-decoration-none ${props.active == "about" ? "active" : ""}`}>About</Link></li>
            <li className="nav-item dropdown">
              <Link to={"/service"} className={`d-none d-md-block nav-link text-uppercase pointer dropdown-toggle text-decoration-none pe-3 ${props.active == "service" ? "active" : ""}`} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Service</Link>
              <Link className={`d-md-none nav-link text-uppercase pointer dropdown-toggle text-decoration-none service-mob pe-3 ${props.active == "service" ? "active" : ""}`} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Service</Link>
              <div className="dropdown-menu dropdown-menu-top" aria-labelledby="navbarDropdown">
                <li className='dropdown inner-dropdown'>
                  <a href="/service#payers_service" className={`dropdown-item ${props.active == "service" ? "dropdown-active" : ""}`}>Payer Service</a>
                  <div className="dropdown-menu dropdown-menu-inner" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="/service#vendor">Vendor Claim System Services</a>
                    <a className="dropdown-item" href="/service#implementation">Implementation Services</a>
                    <a className="dropdown-item" href="/service#operations_service">Operations Consulting</a>
                  </div>
                </li>
              </div>
            </li>
            <li className='nav-item btm-br top-br'><Link to={"/our-clients"} className={`nav-link text-uppercase pointer text-decoration-none ${props.active == "clients" ? "active" : ""}`}>Our Clients</Link></li>
            <li className='nav-item btm-br'><Link to={"/blogs"} className={`nav-link text-uppercase pointer text-decoration-none ${props.active == "blogs" ? "active" : ""}`}>Blogs</Link></li>
            <li className='nav-item'><Link to={"/contact"} className={`nav-link text-uppercase pointer text-decoration-none ${props.active == "contact" ? "active" : ""}`}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>

  )
}
