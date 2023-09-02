import React from 'react'
import Operational from '../assets/images/operational-dev.jpg';
import { Layout } from '../layout/layout';
import { Link } from 'react-router-dom';
import '../assets/styles/conponents/home.scss'

export const Home = () => {
  return (
    <Layout active={"home"}>
      <div className='hero'>
        <section className='main-section'>
          <div className='main'>
            {/* <img className='img-fluid w-100' src={Operational} alt='Operational-image' /> */}
            <div className='container'>
              <div className='health'>
                <div className='transparent p-3 p-md-4 p-lg-5 animated slideInUp'>
                  <div className='text-01 text-white fnt-36 fnt-md-56'>HEALTHALL <br /> CONSULTING</div>
                  <div className='text-02 text-white fnt-20 fnt-md-30'>Your trusted business partner for <br /> Hospitals and Payers.</div>
                  <p className='text-white fnt-16 d-none d-md-block'>Contact us for quality and value you can trust.</p>
                  <button className='btn get-btn btn-primary py-2 px-3'>Get in touch</button>
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
                      <h1><strong>Welcome to HealthAll Consulting</strong></h1>
                      <p>HealthAll Consulting is a firm that is dedicated and focused entirely on the healthcare industry market with two key areas of focus – <strong>Providers </strong>and<strong> Payers</strong>.</p>
                      <p>Executives of the company are well connected to Subject Matter Experts and senior healthcare professionals that offer deep domain experience that will deliver optimal results in helping your organization meet its objectives.</p>
                      <p>HealthAll Consulting’s service offerings will allow your organization to focus on what you do best, that is, improving the delivery of quality patient care and member services. Let us do what we do best, helping you reduce operating cost and maximize your investment in information technology.</p>
                    </div>
                  </div>
                  <div className="">
                    <div className="col-sm-6">
                      <div className="">
                        <div className="">
                          <div className="">
                            <h3><strong>Dedicated to helping healthcare organizations:</strong></h3>
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
                          <div className="">
                            <div className="">
                              <div className="">
                                <h3><strong>Our Clients Include:</strong></h3>
                                <p>Hospitals, IDN’s, HMO’s, PPO’s, TPA’s, Blue Cross and Blue Shield plans, software vendors, physician practices and global consulting firm business partners throughout the United States, and the Caribbean.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <div className="vc_empty_space" style={"height: 32px"}><span className="vc_empty_space_inner"></span></div> */}
                        <div className="plethora_button wpb_content_element text-left ">
                          <Link to={"/contact"} className=" btn btn-primary with-icon icon-left" target="_self">
                            <i className="fa fa-hospital-o"></i>
                            GET TO KNOW US!
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="wpb_column vc_column_container col-sm-6">
                      <div className="wpb_wrapper">
                        <div className="teaser_box wpb_content_element text-center image_hover skincolored_section    with_button    ">

                          {/* <div className="figure ">
                            <Link to={"/contact"}>
                              <div className="figure  stretchy_wrapper ratio_16-9" style={"background-image:url('https://healthallconsult.com/wp-content/uploads/2020/07/Depositphotos_57378019_xl-2015-scaled.jpg')"}></div>
                            </Link>
                          </div> */}

                          {/* <div className="content text-center boxed with_button">
                            <div className="hgroup">
                              <h4 className="neutralize_links">
                                CONTACT US TODAY
                              </h4>
                              <p>Speak to a professional!</p>
                            </div>

                            <div className="link centered">
                              <a href="/contact" target="" className="btn btn-xs btn-secondary"><strong>More</strong></a>
                            </div>
                          </div> */}
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
              <div className='text-white fnt-36 fnt-md-56 fw-900'>
                Service Portfolio
              </div>
              <p className='text-white fnt-16'>Learn more about the services we offer.</p>
              <div className='row'>
                <div className='col-12 col-lg-8 row pr-sm-0'>
                  <div className='col-12 col-md-4 pr-sm-0 pb-sm-4'>
                    {/* PROVIDERS */}
                    <div className='service-box'>
                      <img className='img-fluid' src='https://healthallconsult.com/wp-content/uploads/2020/07/Depositphotos_23068096_xl-2015-scaled.jpg' alt='' />
                      <div className='p-3'>
                        <div className='text-center fw-bold py-2'>PROVIDERS</div>

                      </div>
                    </div>
                  </div>
                  <div className='col-12 col-md-4 pr-sm-0 pb-sm-4'>
                    {/* PROVIDERS */}
                    <div className='service-box'>
                      <img className='img-fluid' src='https://healthallconsult.com/wp-content/uploads/2020/07/Depositphotos_23068096_xl-2015-scaled.jpg' alt='' />
                      <div className='p-3'>
                        <div className='text-center fw-bold py-2'>PROVIDERS</div>
                        <p className=''>
                          Our focus is on your core claim system. We offer Subject Matter Experts (Configuration, BA’s SA’s Developers, Project Managers and more). Through the deployment of industry best practices combined with deep system and operations knowledge, we can help your organization fully optimize the functionality of your core claim system to reduce operational cost and also help achieve your business and Information Technology objectives.
                        </p>
                      </div>

                    </div>
                  </div>
                  <div className='col-12 col-md-4 pr-sm-0 pb-sm-4'>
                    {/* PROVIDERS */}
                    <div className='service-box'>
                      <img className='img-fluid' src='https://healthallconsult.com/wp-content/uploads/2020/07/Depositphotos_23068096_xl-2015-scaled.jpg' alt='' />
                      <div>PROVIDERS</div>
                    </div>
                  </div>
                </div>
                <div className='col-12 col-lg-4 ms-lg-3'>
                  <div className='text-white fnt-18 fw-900 fnt-fly fnt-18'>OUR PROMISE TO YOU</div>
                  <div class="">
                    <p className='text-white'>At HealthAll Consulting, we provide “<strong>QUALITY</strong>” consulting that will meet the specific needs of your business.</p>
                    <p className='text-white'>We are committed to providing our clients with the “<strong>BEST VALUE</strong>” for their investment.</p>
                    <p className='text-white'>HealthAll Consulting strives to create a lasting partnership with our clients based on “<strong>TRUST.</strong>”</p>
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
