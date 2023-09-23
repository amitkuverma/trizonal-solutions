import * as React from "react";
import { Layout } from "../layout/layout";
import '../assets/styles/conponents/service.scss'
import { Link } from "react-router-dom";
import ServiceImage from '../assets/images/service-main.png'

export const Services = () => {
    const [activeTab, setActiveTab] = React.useState("pills-Vendor");

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <Layout active={"service"}>
            <section className="bg-clref">
                <div className="container pt-4 pt-md-5">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img className="img-fluid" src={ServiceImage} alt="ServiceImage" />
                        </div>
                        <div className="col-12 col-md-6">
                            <h3 className="fw-900 fnt-22 fnt-md-24 fnt-fly pt-3 pt-md-0">THE BEST TALENT IN THE HEALTHCARE INDUSTRY</h3>
                            <p className="lh-225 fnt-15">The healthcare professionals at Trizonal Solutions represent the best talent in the industry. Our Associates include professionals who have held “C” level positions, Program Directors and Sr. Project Manager titles, overseeing large complex system integration, conversion, and implementation projects. Many others are specialists and experts in specific areas of health plans and hospital business operations such as EHR/EMR, Claims, Configuration, Billing, Membership, Medical Management, Reporting, Testing, HIE, Revenue Cycle Management, Meaningful Use, Medicaid, Medicare, HIPAA, ICD-10, 5010, and more.</p>
                            <p className="lh-225 fnt-15">Our professional services model provides clients with optimal staffing flexibility and scale-ability to ensure the most qualified resources will not only meet, but exceed your expectations. Our professional services model allows us to engage and disengage SME’s throughout the project as needed to ensure optimal budget and project objectives are achieved. Unlike other firms, we do not and will not engage professionals throughout the project unnecessarily to maximize our profits.</p>

                        </div>
                    </div>
                    <div className="">
                        <p className="lh-225 fnt-15"><span className="cstm-text-blue">Trizonal Solutions</span>&nbsp;focuses on delivering expert consulting services that assist organizations to optimize their Electronic Health Record (EHR) investments through processes that will maximize integration, workflow, and outcomes.</p>
                        <p className="lh-225 fnt-15">Our industry is actively embracing as well as encouraging all providers and payers to implement telehealth solutions. At Trizonal Solutions we are experienced and prepared to help your organization implement, rollout, and support your telehealth objectives.</p>
                        <p className="lh-225 fnt-15">Overall,&nbsp;Trizonal Solutions&nbsp;clients include; Hospitals, IDN’s, HMO’s, PPO’s, TPA’s, Blue Cross and Blue Shield plans, software vendors, and global consulting firm business partners throughout the United States, Latin America, and the Caribbean.</p>
                    </div>
                </div>
                <div id="payers_service" className="container" >
                    <hr />
                    <h2 className="fw-900 fnt-22 fnt-md-24 fnt-fly text-uppercase">PAYERS</h2>
                    <p><b><span className="cstm-text-blue-unitalic">At&nbsp;<span className="cstm-text-blue">Trizonal Solutions</span>, our payer services focus on your core claim and medical management systems.</span></b>&nbsp;We offer expert level knowledge about these core systems to help your organization achieve its objectives and reduce cost. We can help your organization successfully implement and utilize technologies that improve operational efficiency and solve complex member care management issues. View each category below to find out more information.</p>
                    <p>Our portfolio of consulting services includes unique proprietary tools that we bring to our client engagements. These tools deliver knowledge, planning, and structure to ensure project success and avoid budget overruns.</p>
                    <p><strong>See each category below to find out more information:</strong></p>
                </div>
                {/* Tab  */}

                <div className="container py-3 py-md-4 service-tabs">
                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button
                                className={`bg-white tab-btn nav-link fnt-fly fw-bold ${activeTab === "pills-Vendor" ? "active" : ""}`}
                                onClick={() => handleTabClick("pills-Vendor")}
                            >
                                Vendor Claim System Services
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className={`bg-white tab-btn nav-link fnt-fly fw-bold ${activeTab === "pills-implementation" ? "active" : ""
                                    }`}
                                onClick={() => handleTabClick("pills-implementation")}
                            >
                                Implementation Services
                            </button>
                        </li>

                    </ul>

                    <div className="tab-content bg-white" id="pills-tabContent">
                        <div
                            className={`tab-pane fade ${activeTab === "pills-Vendor" ? "show active" : ""
                                }`}
                            id="pills-Vendor"
                            role="tabpanel"
                            aria-labelledby="pills-Vendor-tab"
                        >
                            <div className="p-3">
                                <p>
                                    <b>
                                        <span className="cstm-text-blue-unitalic">At&nbsp;<span className="cstm-text-blue">Trizonal Solutions</span>, our payer services focus on your core claim and medical management systems.</span>
                                    </b> We offer expert level knowledge about these core systems to help your organization achieve its objectives and reduce cost.
                                    We can help your organization successfully implement and utilize technologies that improve operational efficiency and solve complex member care management issues. View each category below to find out more information.
                                </p>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <ul>
                                            <li>FACETS™</li>
                                            <li>AMISYS</li>
                                            <li>QNXT™</li>
                                            <li>HealthEdge</li>
                                            <li>MHS &amp; MHC</li>
                                            <li>Health Solutions Plus</li>
                                        </ul>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <ul>
                                            <li>Diamond</li>
                                            <li>Peradigm</li>
                                            <li>HealthTrio</li>
                                            <li>EDS</li>
                                            <li>RAMTechnologies</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`tab-pane fade ${activeTab === "pills-implementation" ? "show active" : ""
                                }`}
                            id="pills-implementation"
                            role="tabpanel"
                            aria-labelledby="pills-implementation-tab"
                        >
                            <div className="p-3">
                                <p className="fnt-15 lh-225">New System Implementations and system integration can be complex and financially risky. There is no substitute for experience to help you navigate the roadmap to success. System implementation and integration services are some of our core competencies.</p>
                                <p className="fnt-15 lh-225">We can help your organization save millions of dollars and significantly reduce the cost of complex large scale system implementations such as payer core claim and hospital EMR/EHR applications as well as many others.</p>
                                <p className="fnt-15 lh-225">Our team of professionals offer in depth knowledge and experience with the industry’s leading payer and hospital applications. This expertise can translate into project cost reductions for your organization resulting in millions of dollars over the life of the project. More importantly, our unparalleled expert knowledge of these leading applications will assure the success of your project objectives.</p>
                                <p className="fnt-15 lh-225">We have already achieved this success for other clients. There is no reason why we cannot achieve the same results for you!</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div id="operations_service" className="claims-service">
                    {/* 01 */}
                    {/* <div className="container">
                        <hr />
                        <h2 className="fw-900 fnt-22 fnt-md-24 fnt-fly text-uppercase">Operations Consulting</h2>
                        <div className="row py-4 pb-md-5">
                            <div className="col-12 col-lg-6 d-md-none">
                                <div className="elementor-widget-wrap elementor-element-populated populated-image1">
                                    <div className="elementor-background-overlay"></div>
                                    <div className="elementor-image-box-content text-center w-75">
                                        <h1 className="text-white">Claims</h1>
                                        <p className="text-white">Improving the Accuracy and Timeliness of Payments</p>
                                    </div>
                                </div>
                            </div>

                            <div className=" col-12 col-lg-6 py-3">
                                <h1 className="fnt-36 fnt-md-45 fnt-lg-60 fw-100">01</h1>
                                <hr />
                                <div className="elementor-widget-container">
                                    <p className="">The claims function is central to the health plan business model. Payers that fully leverage the power of automation
                                        can improve the accuracy and timeliness of payments to reduce administrative costs and increase the satisfaction of members and providers.</p>
                                    <p className="">Catalyst will help:</p>
                                    <ul>
                                        <li className="">Optimize System Configuration</li>
                                        <li className="">Business Process Improvement</li>
                                        <li className="">Process Claims</li>
                                        <li className="">Outsource Claims Processing</li>
                                        <li className="">Policy &amp; Procedure Documentation</li>
                                        <li className="">Training &amp; Training Development</li>
                                        <li className="">Quality Assurance</li>
                                        <li className="">Workflow Management Optimization</li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn btn-primary update-btn">Get start</Link>
                            </div>
                            <div className="col-12 col-lg-6 d-none d-lg-block">
                                <div className="elementor-widget-wrap elementor-element-populated populated-image1">
                                    <div className="elementor-background-overlay"></div>
                                    <div className="elementor-image-box-content text-center w-75">
                                        <h1 className="elementor-image-box-title text-white">Claims</h1>
                                        <p className="elementor-image-box-description text-white">Improving the Accuracy and Timeliness of Payments</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* 02 */}
                    {/* <div className="bg-dark">
                        <div className="container">
                            <div className="row py-4 py-md-5">
                                <div className="col-12 col-lg-6">
                                    <div className="elementor-widget-wrap elementor-element-populated populated-image2">
                                        <div className="elementor-background-overlay"></div>
                                        <div className="elementor-image-box-content text-center w-75">
                                            <h1 className="elementor-image-box-title text-white">Billing</h1>
                                            <p className="elementor-image-box-description text-white">Technology Enablement and Automation</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="service_column col-12 col-lg-6">
                                    <h1 className="text-white fnt-36 fnt-md-45 fnt-lg-60 fw-100">02</h1>
                                    <hr className="text-white" />
                                    <div className="elementor-widget-container">
                                        <p className="text-white">Members and subscribers have become immensely more sophisticated and their expectations around
                                            ease and flexibility of payment have increased. Cash and checks used to be the only ways consumers could pay their bills,
                                            but advances in technology have enabled billing departments to provide new channels and payment methods, including IVR
                                            and web portals, used through the user’s computer, smartphone or tablet. Further, new technologies have allowed healthcare
                                            plans to increase security, while automating the back-end processes to maximize efficiencies and drive down costs.</p>
                                        <p className="text-white">Catalyst will help:</p>
                                        <ul>
                                            <li className="text-white">Business Process Improvement</li>
                                            <li className="text-white">Policy &amp; Procedure Documentation</li>
                                            <li className="text-white">Member Data Clean-Up</li>
                                            <li className="text-white">Optimizing Data Flow Accuracy</li>
                                            <li className="text-white">Training &amp; Training Development</li>
                                        </ul>
                                    </div>
                                    <Link to="/contact" className="btn btn-primary update-btn">Get start</Link>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* 03 */}
                    {/* <div className="container px-0">
                        <div className="row py-4 py-md-5">
                            <div className="col-12 col-lg-6 d-md-none">
                                <div className="elementor-widget-wrap elementor-element-populated populated-image3">
                                    <div className="elementor-background-overlay"></div>
                                    <div className="elementor-image-box-content text-center w-75">
                                        <h1 className="text-white">Configuration</h1>
                                        <p className="text-white">Gaining Efficiencies Through Smart Configuration</p>
                                    </div>
                                </div>
                            </div>

                            <div className=" col-12 col-lg-6 py-3">
                                <h1 className="fnt-36 fnt-md-45 fnt-lg-60 fw-100">03</h1>
                                <hr />
                                <div className="elementor-widget-container">
                                    <p className="">Health plans with well-designed configuration can achieve lower operational costs, improved claims
                                        payment accuracy, and fewer pended claims – all important for provider and member satisfaction. Changes to the marketplace
                                        drive health plans to introduce new products and enter new lines of business. This creates new business rules which drive changes
                                        to configuration and many health plans struggle to keep pace. Catalyst has extensive experience working with all major claims platforms
                                        and can transform configuration to meet the needs of the plan.</p>
                                    <p className="">Catalyst will help:</p>
                                    <ul>
                                        <li className="">Configuration Design &amp; Build</li>
                                        <li className="">Business Rules Optimization</li>
                                        <li className="">Systems Implementations & Upgrades</li>
                                        <li className="">Configuration Optimization & Re-Design</li>
                                        <li className="">Configuration Supplemental Staff</li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn btn-primary update-btn">Get start</Link>
                            </div>
                            <div className="col-12 col-lg-6 d-none d-lg-block">
                                <div className="elementor-widget-wrap elementor-element-populated populated-image3">
                                    <div className="elementor-background-overlay"></div>
                                    <div className="elementor-image-box-content text-center w-75">
                                        <h1 className="elementor-image-box-title text-white">Configuration</h1>
                                        <p className="elementor-image-box-description text-white">Gaining Efficiencies Through Smart Configuration</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* 04 */}
                    {/* <div className="bg-dark">
                        <div className="container">
                            <div className="row py-4 py-md-5">
                                <div className="col-12 col-lg-6">
                                    <div className="elementor-widget-wrap elementor-element-populated populated-image4">
                                        <div className="elementor-background-overlay"></div>
                                        <div className="elementor-image-box-content text-center w-75">
                                            <h1 className="elementor-image-box-title text-white">Training</h1>
                                            <p className="elementor-image-box-description text-white">Preparing Employees to Perform Effectively</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="service_column col-12 col-lg-6">
                                    <h1 className="text-white fnt-36 fnt-md-45 fnt-lg-60 fw-100">04</h1>
                                    <hr className="text-white" />
                                    <div className="elementor-widget-container">
                                        <p className="text-white">When moving to a new technology or changing roles, it’s critical that employees learn
                                            the tasks necessary to effectively do their job. Based on adult learning theory and instructional design practices,
                                            Catalyst’s training incorporates the most critical learning objectives related to the technology and/or role to ensure
                                            employees are well prepared to meet established metrics.</p>
                                        <p className="text-white">Catalyst will help:</p>
                                        <ul>
                                            <li className="text-white">Classroom Facilitation</li>
                                            <li className="text-white">Train-the-Trainer</li>
                                            <li className="text-white">Training Manuals</li>
                                            <li className="text-white">Desk-Level Procedures</li>
                                            <li className="text-white">Job Aids</li>
                                        </ul>
                                    </div>
                                    <Link to="/contact" className="btn btn-primary update-btn">Get start</Link>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* 05 */}
                    {/* <div className="container px-0">
                        <div className="row py-4 py-md-5">
                            <div className="col-12 col-lg-6 d-md-none">
                                <div className="elementor-widget-wrap elementor-element-populated populated-image5">
                                    <div className="elementor-background-overlay"></div>
                                    <div className="elementor-image-box-content text-center w-75">
                                        <h1 className="text-white">Operational Readiness</h1>
                                        <p className="text-white">Plan for the Future While Supporting the Present</p>
                                    </div>
                                </div>
                            </div>

                            <div className=" col-12 col-lg-6 py-3">
                                <h1 className="fnt-36 fnt-md-45 fnt-lg-60 fw-100">05</h1>
                                <hr />
                                <div className="elementor-widget-container">
                                    <p className="">Health plans with well-designed configuration can achieve lower operational costs, improved claims
                                        payment accuracy, and fewer pended claims – all important for provider and member satisfaction. Changes to the marketplace
                                        drive health plans to introduce new products and enter new lines of business. This creates new business rules which drive changes
                                        to configuration and many health plans struggle to keep pace. Catalyst has extensive experience working with all major claims platforms
                                        and can transform configuration to meet the needs of the plan.</p>
                                    <p className="">Catalyst will help:</p>
                                    <ul>
                                        <li>Change Management/Adoption Strategy</li>
                                        <li>Future State Process Documentation &amp; Desk-Level Procedures</li>
                                        <li>Key Stakeholder Engagement &amp; Communication Plans</li>
                                        <li>Future-State Job Descriptions &amp; Org Charts Development</li>
                                        <li>Backfill Strategy &amp; Resourcing Support</li>
                                        <li>Updating System Profiles &amp; System Access</li>
                                        <li>Process Testing</li>
                                        <li>Success Metrics for Change</li>
                                        <li>Training Employees on New Processes &amp; Technology</li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn btn-primary update-btn">Get start</Link>
                            </div>
                            <div className="col-12 col-lg-6 d-none d-lg-block">
                                <div className="elementor-widget-wrap elementor-element-populated populated-image5">
                                    <div className="elementor-background-overlay"></div>
                                    <div className="elementor-image-box-content text-center w-75">
                                        <h1 className="elementor-image-box-title text-white">Operational Readiness</h1>
                                        <p className="elementor-image-box-description text-white">Plan for the Future While Supporting the Present</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* support service */}
                    {/* <div className="support">
                        <div className="row mx-0 justify-content-end">
                            <div className="col-lg-8 bg-clr49 p-4 p-lg-5">
                                <div className="service-widget-wrap">
                                    <h4 className="text-center text-white">Client Led Initiatives</h4>
                                    <h2 className="text-center text-white">Support Services</h2>
                                    <hr className="text-white" />
                                    <p className="text-white">The key focus of Catalyst’s Operational Readiness services is managing the human element of project implementations and minimizing the negative effects of change on the workforce. Operational Readiness helps the plan’s resources understand their jobs from end-to-end and ensures productivity and efficiency are not adversely affected by whatever change the project team introduces.</p>
                                    <ul>
                                        <li className="text-white">Interim Health Plan Executives</li>
                                        <li className="text-white">Staff Augmentation for Plan Operations &amp; IT Roles</li>
                                        <li className="text-white">Flexible support teams for Claims, Configuration, Testing, Development &amp; Customer Service</li>
                                        <li className="text-white">Catalyst On-Demand support based upon “bucket of hours”</li>
                                    </ul>
                                </div>


                                <div className="button-wrapper pt-3">
                                    <Link to="/contact" role="button">
                                        <span className="elementor-button-text fw-bold">Get started</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>

            {/* <session id="Implementation">
                <div className="container">
                    <h2 className="fw-900 fnt-22 fnt-md-24 fnt-fly text-uppercase">Implementation Service</h2>
                    <p><b><span className="cstm-text-blue-unitalic">At&nbsp;<span className="cstm-text-blue">Trizonal Solutionss</span>, our payer services focus on your core claim and medical management systems.</span></b> We offer expert level knowledge about these core systems to help your organization achieve its objectives and reduce cost. We can help your organization successfully implement and utilize technologies that improve operational efficiency and solve complex member care management issues. View each category below to find out more information.</p>
                </div>
            </session> */}

        </Layout>
    )
}
