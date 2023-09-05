import * as React from "react";
import { Layout } from "../layout/layout";
import '../assets/styles/conponents/blogs.scss';
import { Link } from "react-router-dom";

export const Blogs = () => {
  return (
    <Layout active={"blogs"}>
      <div className="main-blogs">
        {/* 01 */}
        <div className="container px-0">
          <div className="row py-4 py-md-5">
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
              <button className="btn btn-primary update-btn">Gat start</button>
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
        </div>
        {/* 02 */}
        <div className="bg-dark">
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
              <div className="wpb_column vc_column_container col-12 col-lg-6">
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
                <button className="btn btn-primary update-btn">Gat start</button>
              </div>
            </div>
          </div>
        </div>
        {/* 03 */}
        <div className="container px-0">
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
              <button className="btn btn-primary update-btn">Gat start</button>
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
        </div>
        {/* 04 */}
        <div className="bg-dark">
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
              <div className="wpb_column vc_column_container col-12 col-lg-6">
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
                <button className="btn btn-primary update-btn">Gat start</button>
              </div>
            </div>
          </div>
        </div>
        {/* 05 */}
        <div className="container px-0">
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
              <button className="btn btn-primary update-btn">Gat start</button>
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
        </div>
        {/* support service */}
        <div className="support">
          <div className="row mx-0 justify-content-end">
            <div className="col-lg-8 bg-clr49 p-4 p-lg-5">
              <div class="service-widget-wrap">
                <h4 class="text-center text-white">Client Led Initiatives</h4>
                <h2 class="text-center text-white">Support Services</h2>
                <hr className="text-white" />
                <p className="text-white">The key focus of Catalyst’s Operational Readiness services is managing the human element of project implementations and minimizing the negative effects of change on the workforce. Operational Readiness helps the plan’s resources understand their jobs from end-to-end and ensures productivity and efficiency are not adversely affected by whatever change the project team introduces.</p>
                <ul>
                  <li className="text-white">Interim Health Plan Executives</li>
                  <li className="text-white">Staff Augmentation for Plan Operations &amp; IT Roles</li>
                  <li className="text-white">Flexible support teams for Claims, Configuration, Testing, Development &amp; Customer Service</li>
                  <li className="text-white">Catalyst On-Demand support based upon “bucket of hours”</li>
                </ul>
              </div>


              <div class="button-wrapper pt-3">
                <Link to="/contact" role="button">
                  <span class="elementor-button-text fw-bold">Get started</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 100"><defs><marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto"><polygon fill="#d19b2d" points="0 0, 10 3.5, 0 7"></polygon></marker></defs><line x1="0" y1="50" x2="250" y2="50" stroke="#d19b2d" stroke-width="6" marker-end="url(#arrowhead)"></line></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
