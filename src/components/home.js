import React from 'react'
import Operational from '../assets/images/operational-dev.jpg';
import { Layout } from '../layout/layout';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <Layout active={"home"}>
      <div className='hero'>
        <section>
          <div>
            <img className='img-fluid w-100' src={Operational} alt='Operational-image' />
          </div>
        </section>

        <section className="">
          <div className="container">
            <div className="row">
              <div className="wpb_column vc_column_container col-sm-12">
                <div className="wpb_wrapper">
                  <div className="wpb_text_column wpb_content_element ">
                    <div className="wpb_wrapper">
                      <h1><strong>Welcome to HealthAll Consulting</strong></h1>
                      <p>HealthAll Consulting is a firm that is dedicated and focused entirely on the healthcare industry market with two key areas of focus – <strong>Providers </strong>and<strong> Payers</strong>.</p>
                      <p>Executives of the company are well connected to Subject Matter Experts and senior healthcare professionals that offer deep domain experience that will deliver optimal results in helping your organization meet its objectives.</p>
                      <p>HealthAll Consulting’s service offerings will allow your organization to focus on what you do best, that is, improving the delivery of quality patient care and member services. Let us do what we do best, helping you reduce operating cost and maximize your investment in information technology.</p>
                    </div>
                  </div>
                  <div className="vc_row wpb_row vc_inner vc_row-fluid">
                    <div className="wpb_column vc_column_container col-sm-6">
                      <div className="wpb_wrapper">
                        <div className="wpb_text_column wpb_content_element ">
                          <div className="wpb_wrapper">
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

                        <div className="wpb_text_column wpb_content_element ">
                          <div className="wpb_wrapper">
                            <div className="wpb_text_column wpb_content_element ">
                              <div className="wpb_wrapper">
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

                          <div className="content text-center boxed with_button">
                            <div className="hgroup">
                              <h4 className="neutralize_links">
                                CONTACT US TODAY
                              </h4>
                              <p>Speak to a professional!</p>
                            </div>

                            <div className="link centered">
                              <a href="/contact" target="" className="btn btn-xs btn-secondary"><strong>More</strong></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
