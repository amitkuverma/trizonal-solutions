import React from 'react';
import "../assets/styles/layout/header.scss"
import logo from "../assets/images/logo.png"

export const Header = () => {

  return (
    <nav className="sticky-top header">
      <div className="d-flex justify-content-between container px-3 px-md-4 py-3 bg-white">
        <a className="navbar-brand pointer logo">
          <img src={logo} alt='logo' />
          Trizonal <span className="sub">Solutions</span>
        </a>
        <div className="d-flex align-items-center">
          <ul className="d-flex mb-0">
            <li><a className="text-uppercase pointer text-decoration-none">Home</a></li>
            <li><a className="text-uppercase pointer text-decoration-none">About</a></li>
            <li><a className="text-uppercase pointer text-decoration-none service">Service</a>
              <div className='sub-menu'>
                <ul className='ps-0 py-4 bg-white'>
                  <li><a className="text-uppercase pointer text-decoration-none">Hospitals & Providers</a></li>
                  <li><a className="text-uppercase pointer text-decoration-none">Payer Services</a></li>
                </ul>
              </div>
            </li>
            <li><a className="text-uppercase pointer text-decoration-none">Our Clients</a></li>
            <li><a className="text-uppercase pointer text-decoration-none">Blogs</a></li>
            <li><a className="text-uppercase pointer text-decoration-none">Contant</a></li>
          </ul>
        </div>
      </div>
    </nav>

  )
}
