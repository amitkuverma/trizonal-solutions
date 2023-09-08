import React from 'react'
import { Layout } from '../layout/layout';
import { Link } from 'react-router-dom';
import '../assets/styles/conponents/home.scss'
import Book from '../assets/images/strive-test.png';
import Strive from '../assets/images/icon_med_book_white.png';
import Doctor from '../assets/images/icon_doctor1.png';
import Depositphotos_1 from '../assets/images/Depositphotos_23068096_xl-2015-scaled.jpg';
import Depositphotos_2 from '../assets/images/Screen-Shot-2020-07-08-at-5.02.09-PM.png';
import Depositphotos_3 from '../assets/images/Depositphotos_326087168_xl-2015-scaled.jpg';


export const Home = () => {
  return (
    <Layout active={"home"}>
      <div className='hero'>
        <section className='main-section'>
          <div className='main'>
            <div className='container'>
              <div className='health'>
                <div className='transparent p-3 p-md-4 p-lg-5 animated slideInUp'>
                  <div className='text-01 text-white fnt-36 fnt-md-56'>TRIZONAL <br /> SOLUTIONS</div>
                  <div className='text-02 text-white fnt-20 fnt-md-30'>Your trusted business partner for <br /> Hospitals and Payers.</div>
                  <p className='text-white fnt-16 d-none d-md-block'>Contact us for quality and value you can trust.</p>
                  <button className='btn get-btn btn-primary py-2 px-3'>Get in touch</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-md-4 rhom1 bg-clr11 py-3 py-md-4 py-lg-5 mb-3'>
                <div className='text-center'>
                  <img className='img-fluid' src={Strive} alt='Strive' />
                  <div>
                    <h4 className="text-white">
                      ELECTRONIC HEALTH RECORDS &amp; TELEMED
                    </h4>
                    <p className="text-white">Taking Care of Patients</p>
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-4 rhom2 bg-clr12 py-3 py-md-4 py-lg-5 mb-3'>
                <div className='text-center'>
                  <img className='img-fluid' src={Book} alt='Book' />
                  <div>
                    <h4 className="text-white">
                      ELECTRONIC HEALTH RECORDS &amp; TELEMED
                    </h4>
                    <p className="text-white">Taking Care of Patients</p>
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-4 rhom1 bg-clr13 py-3 py-md-4 py-lg-5 mb-3'>
                <div className='text-center'>
                  <img className='img-fluid' src={Doctor} alt='Doctor' />
                  <div>
                    <h4 className="text-white">
                      ELECTRONIC HEALTH RECORDS &amp; TELEMED
                    </h4>
                    <p className="text-white">Taking Care of Patients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 pb-4">
                <div className="">
                  <div className="">
                    <div className="">
                      <h1 className='text-uppercase'><strong>Welcome to Trizonal Solution</strong></h1>
                      <p>Trizonal Solution is a firm that is dedicated and focused entirely on the healthcare industry market with two key areas of focus – <strong>Providers </strong>and<strong> Payers</strong>.</p>
                      <p>Executives of the company are well connected to Subject Matter Experts and senior healthcare professionals that offer deep domain experience that will deliver optimal results in helping your organization meet its objectives.</p>
                      <p>Trizonal Solution's service offerings will allow your organization to focus on what you do best, that is, improving the delivery of quality patient care and member services. Let us do what we do best, helping you reduce operating cost and maximize your investment in information technology.</p>
                    </div>
                  </div>
                  <div className="">
                    <div className="col-sm-6">
                      <div className="">
                        <div className="">
                          <div className="">
                            <h3 className='text-uppercase fnt-md-24'><strong>Dedicated to helping healthcare organizations:</strong></h3>
                            <ul>
                              <li>Reduce the cost of operations</li>
                              <li>Maximize their investment in information technology</li>
                              <li>Adopt industry best practices</li>
                              <li>Increase revenues through financial recovery services</li>
                              <li>Improve member services and patient care</li>
                            </ul>
                          </div>
                        </div>

                        <div className="">
                          <h3 className='text-uppercase fnt-md-24'><strong>Our Clients Include:</strong></h3>
                          <p>Hospitals, IDN’s, HMO’s, PPO’s, TPA’s, Blue Cross and Blue Shield plans, software vendors, physician practices and global consulting firm business partners throughout the United States, and the Caribbean.</p>
                        </div>
                        <div className="plethora_button text-left ">
                          <Link to={"/contact"} className=" btn btn-primary update-btn fnt-fly fw-bold">
                            <i className="fa fa-hospital-o"></i>
                            GET TO KNOW US!
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <session >
          <div className="service-portfolio">
            <div className='container py-4'>
              <div className='text-white fnt-36 fnt-md-56 fw-900 text-uppercase'>
                Service Portfolio
              </div>
              <p className='text-white fnt-16'>Learn more about the services we offer.</p>
              <div className='row'>
                <div className='col-12 col-lg-8 row pr-sm-0'>
                  <div className='col-12 col-md-4 pr-sm-0 pb-sm-4'>
                    {/* PROVIDERS */}
                    <div className='service-box'>
                      <img className='img-fluid' src={Depositphotos_1} alt='' />
                      <div className='p-3 text-center'>
                        <div className='fw-bold py-2'>PROVIDERS</div>
                        <p className='lh-225 fnt-14'>Trizonal Solution assists healthcare providers in using technology to increase performance, productivity, achieve clinical integration, optimization, improve patient care quality and wellness services.</p>
                        <div>
                          <button className='btn btn-primary update-btn py-1 text-uppercase'>More</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-12 col-md-4 pr-sm-0 pb-sm-4'>
                    {/* PAYERS */}
                    <div className='service-box'>
                      <img className='img-fluid' src={Depositphotos_2} alt='PAYERS' />
                      <div className='p-3 text-center'>
                        <div className='fw-bold py-2'>PAYERS</div>
                        <p className='lh-225 fnt-14'>
                          Our focus is on your core claim system. We offer Subject Matter Experts (Configuration, BA’s SA’s Developers, Project Managers and more). Through the deployment of industry best practices combined with deep system and operations knowledge, we can help your organization fully optimize the functionality of your core claim system to reduce operational cost and also help achieve your business and Information Technology objectives.
                        </p>
                        <div>
                          <button className='btn btn-primary update-btn py-1 text-uppercase'>More</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-12 col-md-4 pr-sm-0 pb-sm-4'>
                    {/* HOSPITALS */}
                    <div className='service-box'>
                      <img className='img-fluid' src={Depositphotos_3} alt='HOSPITALS' />
                      <div className='p-3 text-center'>
                        <div className='fw-bold py-2'>HOSPITALS</div>
                        <p className='lh-225 fnt-14'>Need help with your EMR, financial or other departmental system implementation, or improve revenue performance? If so, these services represent our core competencies and we welcome the opportunity to be of service!</p>
                        <div>
                          <button className='btn btn-primary update-btn py-1 text-uppercase'>More</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-12 col-lg-4 ms-lg-3'>
                  <div className='text-white fnt-18 fw-900 fnt-fly fnt-18'>OUR PROMISE TO YOU</div>
                  <div>
                    <p className='text-white'>At Trizonal Solution, we provide “<strong>QUALITY</strong>” consulting that will meet the specific needs of your business.</p>
                    <p className='text-white'>We are committed to providing our clients with the “<strong>BEST VALUE</strong>” for their investment.</p>
                    <p className='text-white'>Trizonal Solution strives to create a lasting partnership with our clients based on “<strong>TRUST.</strong>”</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </session>
      </div>
    </Layout>
  )
}
