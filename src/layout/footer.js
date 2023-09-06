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
            <div className='col-12 col-md-6 pb-4 pb-md-0'>
              <Link to={"/"} className="navbar-brand pointer logo">
                <img className='img-fluid' src={logo} alt='logo' />
                <span className='fnt-24 fnt-md-36 fw-900 fnt-fly text-uppercase footer-text'>Trizonal <span className="txt-clrf9">Solutions</span></span>
              </Link>
            </div>
            <div className='col-12 col-md-6'>
              <div className='fnt-18 fnt-fly fw-900 text-uppercase pb-1 pb-md-4'>Trizonal Solutions</div>
              <p className='mb-1'><b>Email:</b> healthcare@trizonalsolutions.com</p>
              <p><b>Address:</b> Cigna Healthcare. New York, New York, United States</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-footer'>
        <div className='container text-white py-3'>&#169; 2023 Trizonal <span className='txt-clrf9'>Solutions</span>.</div>
      </div>
    </div>
  )
}
