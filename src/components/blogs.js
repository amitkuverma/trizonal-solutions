import * as React from "react";
import { Layout } from "../layout/layout";
import '../assets/styles/conponents/blogs.scss'

export const Blogs = () => {
  return (
    <Layout active={"blogs"}>
      <div className="bg-dark">
        <div className="container">
          <div className="row py-5">
            <div className="col-6">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-background-overlay"></div>
                <div class="elementor-image-box-content text-center w-75">
                  <h1 class="elementor-image-box-title text-white">Drive Operational Outcomes</h1>
                  <p class="elementor-image-box-description text-white">Run a Health Plan Efficiently and Cost Effectively</p>
                </div>
              </div>
            </div>

            {/* <div className="col-6">
              <img className="img-fluid" src="https://catalystsolutions.com/wp-content/uploads/2022/04/billing-background.jpg" alt="wp-content" />
            </div> */}
            <div className="wpb_column vc_column_container col-6">
              <div className="wpb_wrapper">
                <div className="wpb_text_column wpb_content_element ">
                  <div className="wpb_wrapper">
                    <h1 className="text-white">01</h1>
                    <br />
                    <div className="elementor-widget-container">
                      <p className="text-white">The claims function is central to the health plan business model. Payers that fully leverage the power of automation can improve the accuracy and timeliness of payments to reduce administrative costs and increase the satisfaction of members and providers.</p>
                      <p className="text-white">Catalyst will help:</p>
                      <ul>
                        <li className="text-white">Optimize System Configuration</li>
                        <li className="text-white">Business Process Improvement</li>
                        <li className="text-white">Process Claims</li>
                        <li className="text-white">Outsource Claims Processing</li>
                        <li className="text-white">Policy &amp; Procedure Documentation</li>
                        <li className="text-white">Training &amp; Training Development</li>
                        <li className="text-white">Quality Assurance</li>
                        <li className="text-white">Workflow Management Optimization</li>
                      </ul>
                    </div>
                    <button className="btn btn-light">Gat start</button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row pt-5">
            <div className="wpb_column vc_column_container col-6">
              <div className="wpb_wrapper">
                <div className="wpb_text_column wpb_content_element ">
                  <div className="wpb_wrapper">
                    <h1 className="text-white">02</h1>
                    <br />
                    <div className="elementor-widget-container">
                      <p className="text-white">The claims function is central to the health plan business model. Payers that fully leverage the power of automation can improve the accuracy and timeliness of payments to reduce administrative costs and increase the satisfaction of members and providers.</p>
                      <p className="text-white">Catalyst will help:</p>
                      <ul>
                        <li className="text-white">Optimize System Configuration</li>
                        <li className="text-white">Business Process Improvement</li>
                        <li className="text-white">Process Claims</li>
                        <li className="text-white">Outsource Claims Processing</li>
                        <li className="text-white">Policy &amp; Procedure Documentation</li>
                        <li className="text-white">Training &amp; Training Development</li>
                        <li className="text-white">Quality Assurance</li>
                        <li className="text-white">Workflow Management Optimization</li>
                      </ul>
                    </div>
                    <button className="btn btn-light">Gat start</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <img className="img-fluid" src="https://catalystsolutions.com/wp-content/uploads/2022/04/billing-background.jpg" alt="wp-content" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
