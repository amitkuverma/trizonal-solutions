import * as React from "react";
import { Layout } from "../layout/layout";
import Provider from "../assets/images/Screen-Shot-2020-07-27-at-5.28.58-PM.png";
import Payer from "../assets/images/AdobeStock_210533545.png";

export const OurClients = () => {
    return (
        <Layout active={"clients"}>
            <div className="bg-clrf9">
                <div className="container">
                    <h1 className="fnt-fly py-4 text-white fnt-36 fnt-md-40 fw-900 text-capitalize">OUR CLIENTS</h1>
                </div>
            </div>
            <div className="container pb-4">
                <div className="client_wrapper">
                    <h3 className="fw-900 pt-4">OUR COMMITMENT TO CLIENTS:</h3>
                    <p>At HealthAll Consulting,&nbsp;we are dedicated exclusively to serving the healthcare industry. Our knowledge and experience of the healthcare industry is unmatched. Our healthcare payer and hospital professionals deliver subject matter and expert level knowledge and experience on healthcare business operations and information technology. We are confident we can help your organization reduce its cost of operations and maximize its investment in information technology. In sum, our client references can attest to our value and contributions in helping them achieve success.</p>
                    <p>This confidence and success is based on our talented team of veteran healthcare professionals that offer extensive experience and a proven track record in assisting payers and providers with such accomplishments. Our healthcare professionals offer unmatched operations and IT knowledge and are second to none in the industry.</p>
                    <p className="py-3  pb-md-4">At HealthAll Consulting, we provide “<strong>QUALITY</strong>” consulting that will meet the specific needs of your business. We are committed to providing our clients with the “<strong>BEST VALUE</strong>” for their investment. HealthAll Consulting strives to create a lasting partnership with our clients based on “<strong>TRUST.</strong>”</p>
                </div>
                <div className="row">
                    <h2 className="text-center fw-900 pb-4">Client Engagements</h2>
                    <div className="col-12 col-md-6">
                        <div className="br-f9-1 pt-5 px-3 px-md-4 pt-md-5">
                            <img className="img-fluid" src={Provider} alt="Provider image" />
                            <h4 className="fw-bold">
                                Provider Engagements
                            </h4>
                            <div className="text-center">
                                <button className="btn btn-primary btn-main">More</button>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-md-6">
                        <div className="br-f9-1 pt-5 px-3 px-md-4 pt-md-5">
                            <img className="img-fluid" src={Payer} alt="Payer image" />
                            <h4 className="fw-bold text-center">
                                Payer Engagements
                            </h4>
                            <div className="text-center">
                                <button className="btn btn-primary update-main">More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
