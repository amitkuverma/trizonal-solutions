import React, { useState } from 'react';
import "../assets/styles/layout/header.scss"
import logo from "../assets/images/logo.png"

export const Header = () => {
  return (  
    <nav class="navbar navbar-expand-sm sticky-top header">
      <div class="container ">
        <a className="navbar-brand pointer logo">
          <img src={logo} alt='logo' />
          Trizonal <span className="sub">Solutions</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
         <ul className="navbar-nav">
             <li className='nav-item'><a href='home' className="nav-link active text-uppercase pointer text-decoration-none">Home</a></li>
             <li className='nav-item'><a href='about' className="nav-link text-uppercase pointer text-decoration-none">About</a></li>
             <li className='nav-item'><a className="nav-link text-uppercase pointer text-decoration-none service pe-3">Service</a>
               <div className='sub-menu'>
                 <ul className='ps-0 py-4 bg-white'>
                   <li><a href='hospitals-providers' className="text-uppercase pointer text-decoration-none">Hospitals & Providers</a></li>
                   <li><a href='payer-services' className="text-uppercase pointer text-decoration-none">Payer Services</a></li>
                 </ul>
               </div>
             </li>
             <li className='nav-item'><a href='our-clients' className="nav-link text-uppercase pointer text-decoration-none">Our Clients</a></li>
             <li className='nav-item'><a href='blogs' className="nav-link text-uppercase pointer text-decoration-none">Blogs</a></li>
             <li className='nav-item'><a href='contact' className="nav-link text-uppercase pointer text-decoration-none">Contact</a></li>
           </ul>
        </div>
      </div>
    </nav>

  )
}
