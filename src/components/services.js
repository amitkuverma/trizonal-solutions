import * as React from "react";
import { Layout } from "../layout/layout";
import '../assets/styles/conponents/payer-service.scss'

export const Services = () => {
    return (
        <Layout active={"service"}>
            <div className="">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img className="img-fluid" src="https://healthallconsult.com/wp-content/uploads/2020/07/Screen-Shot-2020-07-08-at-4.45.56-PM.png" alt="wp-content" />
                        </div>
                        <div className="wpb_column vc_column_container col-12 col-md-6">
                            <div className="wpb_wrapper">
                                <div className="wpb_text_column wpb_content_element ">
                                    <div className="wpb_wrapper">
                                        <h3>THE BEST TALENT IN THE HEALTHCARE INDUSTRY</h3>
                                        <p>The healthcare professionals at HealthAll Consulting represent the best talent in the industry. Our Associates include professionals who have held “C” level positions, Program Directors and Sr. Project Manager titles, overseeing large complex system integration, conversion, and implementation projects. Many others are specialists and experts in specific areas of health plans and hospital business operations such as EHR/EMR, Claims, Configuration, Billing, Membership, Medical Management, Reporting, Testing, HIE, Revenue Cycle Management, Meaningful Use, Medicaid, Medicare, HIPAA, ICD-10, 5010, and more.</p>
                                        <p>Our professional services model provides clients with optimal staffing flexibility and scale-ability to ensure the most qualified resources will not only meet, but exceed your expectations. Our professional services model allows us to engage and disengage SME’s throughout the project as needed to ensure optimal budget and project objectives are achieved. Unlike other firms, we do not and will not engage professionals throughout the project unnecessarily to maximize our profits.</p>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="wpb_text_column wpb_content_element ">
                        <div class="wpb_wrapper">
                            <p><span class="cstm-text-blue">HealthAll Consulting</span>&nbsp;focuses on delivering expert consulting services that assist organizations to optimize their Electronic Health Record (EHR) investments through processes that will maximize integration, workflow, and outcomes.</p>
                            <p>Our industry is actively embracing as well as encouraging all providers and payers to implement telehealth solutions. At HealthAll Consulting, we are experienced and prepared to help your organization implement, rollout, and support your telehealth objectives.</p>
                            <p>Overall,&nbsp;HealthAll Consulting&nbsp;clients include; Hospitals, IDN’s, HMO’s, PPO’s, TPA’s, Blue Cross and Blue Shield plans, software vendors, and global consulting firm business partners throughout the United States, Latin America, and the Caribbean.</p>
                        </div>
                    </div>
                    <br />

                </div>

                <session id="payerService">
                    <div className="container" ><div class="wpb_text_column wpb_content_element ">
                        <div class="wpb_wrapper">
                            <h2>PAYERS</h2>
                            <p><b><span class="cstm-text-blue-unitalic">At&nbsp;<span class="cstm-text-blue">HealthAll Consulting</span>, our payer services focus on your core claim and medical management systems.</span></b>&nbsp;We offer expert level knowledge about these core systems to help your organization achieve its objectives and reduce cost. We can help your organization successfully implement and utilize technologies that improve operational efficiency and solve complex member care management issues. View each category below to find out more information.</p>
                            <p>Our portfolio of consulting services includes unique proprietary tools that we bring to our client engagements. These tools deliver knowledge, planning, and structure to ensure project success and avoid budget overruns.</p>
                            <p><strong>See each category below to find out more information:</strong></p>

                        </div>
                    </div>
                    </div>
                </session>
                <session id="Implementation">
                    <div className="container" ><div class="wpb_text_column wpb_content_element ">
                        <div class="wpb_wrapper">
                            <h2>Implementation Service</h2>
                            <p><b><span class="cstm-text-blue-unitalic">At&nbsp;<span class="cstm-text-blue">HealthAll Consulting</span>, our payer services focus on your core claim and medical management systems.</span></b> We offer expert level knowledge about these core systems to help your organization achieve its objectives and reduce cost. We can help your organization successfully implement and utilize technologies that improve operational efficiency and solve complex member care management issues. View each category below to find out more information.</p>
                        </div>
                    </div>
                    </div>
                </session>

            </div>
        </Layout>
    )
}
