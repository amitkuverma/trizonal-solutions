import React from 'react';
import "../assets/styles/layout/header.scss"

export const Header = () => {

  return (
    <nav class="sticky-top header">
      <div class="d-flex justify-content-between container px-3 px-md-4 py-3 bg-white">
        <a class="navbar-brand pointer logo">
          Trizonal <span class="sub">Solutions</span>
        </a>
        <div class="d-flex align-items-center">
          <ul class="d-flex mb-0">
            <li><a class="text-uppercase pointer text-decoration-none">Home</a></li>
            <li><a class="text-uppercase pointer text-decoration-none">About</a></li>
            <li><a class="text-uppercase pointer text-decoration-none">Service</a></li>
            <li><a class="text-uppercase pointer text-decoration-none">Our Clients</a></li>
            <li><a class="text-uppercase pointer text-decoration-none">Blogs</a></li>
            <li><a class="text-uppercase pointer text-decoration-none">Contant</a></li>
          </ul>
        </div>
      </div>
    </nav>

  )
}
