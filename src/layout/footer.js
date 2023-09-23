import React from 'react';
import "../assets/styles/layout/footer.scss";
import logo from "../assets/images/logo.png"
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-sec bg-white'>
        <div className='container py-4 py-md-5'>
          <div className='row pt-5'>
            <div className='col-12 col-lg-6 pb-4 pb-lg-0 text-center'>
              <Link to={"/"} className="navbar-brand pointer logo">
                <img className='img-fluid' src={logo} alt='logo' />
                <span className='fnt-24 fnt-md-36 fw-900 fnt-fly text-uppercase footer-text'>Trizonal <span className="txt-clrf9">Solutions</span></span>
              </Link>
            </div>
            <div className='col-12 col-lg-6'>
              <h4 className='fnt-18 fnt-fly fw-900 text-uppercase pb-2 txt-clr67 line'>Trizonal Solutions</h4>

              <p class="contact_detail mb-0">
                <a className='text-decoration-none' href="mailto:mailto:info@trizonalsolutions.com">
                  <i class="fa fa-envelope"></i>
                </a>
                <span>
                  <a className='text-decoration-none add-text ps-2' href="mailto:info@trizonalsolutions.com">info@trizonalsolutions.com</a>
                </span>
              </p>
              {/* <p class="contact_detail mb-0">
                <i class="fa fa-location-arrow txt-clr67"></i>
                <span><a className='text-decoration-none add-text ps-2' href="https://www.google.com/maps/place/" target="_blank">78, Landmark Lane Fairlawn, NJ 07410</a></span>
              </p> */}
            </div>
          </div>
        </div>
      </div>
      <div className='bg-footer'>
        <div className='container text-white py-3'>Copyright &#169; 2023 all rights reserved</div>
      </div>
    </div>
  )
}
