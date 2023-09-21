import * as React from "react";
import { Layout } from "../layout/layout";
import AboutCmpImage from '../assets/images/about.png'
import AboutSmall from '../assets/images/ABOUT-1Small.png'

export const About = () => {
    return (
        <Layout active={"about"}>
            <div className="bg-clrf9">
                <div className="container">
                    <h1 className="fnt-fly py-4 text-white fnt-36 fnt-md-40 fw-900 text-capitalize">COMPANY OVERVIEW</h1>
                </div>
            </div>
            <div className="container">
                <h2 className="heading-title">
                    <span className="title-text pp-primary-title text-uppercase">We Help Clients Reduce Cost &amp; Maximize Technology Investments</span>
                </h2>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img className="img-fluid" src={AboutCmpImage} alt="about" />
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="wpb_wrapper">
                            <h3 className="text-uppercase">What We Do Best:</h3>
                            <p className="heading-title">We help your organization reduce its cost of operations and maximize its investment in information technology. In short, our client references can attest to this success. This confidence and success is based on our talented team of veteran healthcare professionals that offer extensive experience and a proven track record in assisting payers and providers with such accomplishments. Our healthcare professionals offer unmatched operations and IT knowledge and are second to none in the industry.</p>
                            <p><strong>In brief,&nbsp;<span className="cstm-text-blue">Trizonal Solutions</span>&nbsp;is dedicated to helping healthcare organizations:</strong></p>
                            <ul>
                                <li>Reduce the cost of operations</li>
                                <li>Maximize their investment in information technology</li>
                                <li>Adopt industry best practices</li>
                                <li>Increase revenues through financial recovery services</li>
                                <li>Improve member services and patient care</li>
                            </ul>
                            <p>We at <span className="cstm-text-blue">HAC</span>&nbsp;understand your daily and long term challenges. More importantly, we know how to be of help.</p>

                        </div>
                    </div>
                    <div className="include_wrapper">
                        <h3 className="text-uppercase">Our Clients include:</h3>
                        <ul className="ps-3">
                            <li>Hospitals, IDN’s, HMO’s, PPO’s, TPA’s, Blue Cross and Blue Shield plans, software vendors, physician practices and global consulting firm business partners throughout the United States, and the Caribbean.</li>
                        </ul>
                        <p className="py-3 py-md-y"><span className="cstm-text-blue">Trizonal Solutions's service offerings will allow your organization to focus on what you do best, that is, improving the delivery of quality patient care and member services.</span> Let us do what we do best, helping you reduce operating cost and maximize your investment in information technology.</p>
                    </div>
                    <div className="col-md-8 col-12">

                        <div className="wpb_wrapper">
                            <h3 className="text-uppercase">About Us</h3>
                            <p>Our professional management consulting services focus exclusively on the healthcare industry dedicated to serving hospitals, health systems and payers.</p>
                            <p>At Trizonal Solutions, we understand your business, that is the business of healthcare.</p>
                            <p>Unlike many other consulting firms, at Trizonal Solutions, healthcare is our only line of business and our only focus. As a professional services organization, we are not trying to be “everything to everyone”. Therefore, the domain knowledge, industry best practices, and practical experience that we bring to client engagements is unmatched by the competition and results in effective solutions and success for our clients.</p>
                            <p><strong>Our core competencies focus on helping your organization with:</strong></p>
                            <p>Reducing the cost of operations<br />
                                Core system implementation and integration<br />
                                Improved financials / Increased revenue<br />
                                Strategic consulting / Advisory services<br />
                                System evaluation &amp; selection<br />
                                Process improvement / Increased productivity / Best practices<br />
                                Medical wellness, &amp; care program management</p>
                            <p><strong>Payer systems we support:</strong> FACETS™, AMISYS, QNXT™, MHS &amp; MHC, Health Solutions Plus, Diamond, Peradigm, HealthEdge, HealthTrio, EDS, RAMTechnologies</p>
                            <p><strong>Hospital systems we work with:</strong> Epic, Cerner, McKesson, Siemen’s, Ambulatory</p>

                        </div>
                    </div>
                    <div className="col-md-4 col-12 d-none d-md-block">
                        <img className="img-fluid" src={AboutSmall} alt="AboutSmall" />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

