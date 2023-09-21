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
                    <p>At Trizonal Solutions,&nbsp;we are dedicated exclusively to serving the healthcare industry. Our knowledge and experience of the healthcare industry is unmatched. Our healthcare payer and hospital professionals deliver subject matter and expert level knowledge and experience on healthcare business operations and information technology. We are confident we can help your organization reduce its cost of operations and maximize its investment in information technology. In sum, our client references can attest to our value and contributions in helping them achieve success.</p>
                    <p>This confidence and success is based on our talented team of veteran healthcare professionals that offer extensive experience and a proven track record in assisting payers and providers with such accomplishments. Our healthcare professionals offer unmatched operations and IT knowledge and are second to none in the industry.</p>
                    <p className="py-3  pb-md-4">At Trizonal Solutions, we provide “<strong>QUALITY</strong>” consulting that will meet the specific needs of your business. We are committed to providing our clients with the “<strong>BEST VALUE</strong>” for their investment. Trizonal Solutions strives to create a lasting partnership with our clients based on “<strong>TRUST.</strong>”</p>
                </div>
                <div className="row">
                    <h2 className="text-center fw-900 pb-4 text-uppercase fnt-fly">Client Engagements</h2>
                    <div className="col-12 col-md-4 mb-3">
                        <div className="br-f9-1 pt-3 px-2 px-md-3 pt-md-4">
                            <img className="img-fluid" src={Provider} alt="Provider image" />
                            <h4 className="fw-bold fnt-20 fnt-md-24 text-uppercase fnt-fly pt-2">
                                Provider Engagements
                            </h4>
                            <div className="text-center pb-3">
                                <button className="btn btn-primary update-btn py-1 text-uppercase fnt-fly">More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mb-3">
                        <div className="br-f9-1 pt-3 px-2 px-md-3 pt-md-4">
                            <img className="img-fluid" src={Payer} alt="Payer image" />
                            <h4 className="fw-bold fnt-20 fnt-md-24 text-uppercase fnt-fly pt-2 text-center">
                                Payer Engagements
                            </h4>
                            <div className="text-center pb-3">
                                <button className="btn btn-primary update-btn py-1 text-uppercase fnt-fly">More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mb-3">
                        <div className="br-f9-1 pt-3 px-2 px-md-3 pt-md-4">
                            <img className="img-fluid" src={Payer} alt="Payer image" />
                            <h4 className="fw-bold fnt-20 fnt-md-24 text-uppercase fnt-fly pt-2 text-center">
                                Gainwell Technology
                            </h4>
                            <div className="text-center pb-3">
                                <button className="btn btn-primary update-btn py-1 text-uppercase fnt-fly">More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mb-3">
                        <div className="br-f9-1 pt-3 px-2 px-md-3 pt-md-4">
                            <img className="img-fluid" src={Payer} alt="Payer image" />
                            <h4 className="fw-bold fnt-20 fnt-md-24 text-uppercase fnt-fly pt-2 text-center">
                                Molina HealthCare
                            </h4>
                            <div className="text-center pb-3">
                                <button className="btn btn-primary update-btn py-1 text-uppercase fnt-fly">More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mb-3">
                        <div className="br-f9-1 pt-3 px-2 px-md-3 pt-md-4">
                            <img className="img-fluid" src={Payer} alt="Payer image" />
                            <h4 className="fw-bold fnt-20 fnt-md-24 text-uppercase fnt-fly pt-2 text-center">
                                BCBS
                            </h4>
                            <div className="text-center pb-3">
                                <button className="btn btn-primary update-btn py-1 text-uppercase fnt-fly">More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mb-3">
                        <div className="br-f9-1 pt-3 px-2 px-md-3 pt-md-4">
                            <img className="img-fluid" src={Payer} alt="Payer image" />
                            <h4 className="fw-bold fnt-20 fnt-md-24 text-uppercase fnt-fly pt-2 text-center">
                                State of Ohio
                            </h4>
                            <div className="text-center pb-3">
                                <button className="btn btn-primary update-btn py-1 text-uppercase fnt-fly">More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mb-3">
                        <div className="br-f9-1 pt-3 px-2 px-md-3 pt-md-4">
                            <img className="img-fluid" src={Payer} alt="Payer image" />
                            <h4 className="fw-bold fnt-20 fnt-md-24 text-uppercase fnt-fly pt-2 text-center">
                                Cognizant
                            </h4>
                            <div className="text-center pb-3">
                                <button className="btn btn-primary update-btn py-1 text-uppercase fnt-fly">More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mb-3">
                        <div className="br-f9-1 pt-3 px-2 px-md-3 pt-md-4">
                            <img className="img-fluid" src={Payer} alt="Payer image" />
                            <h4 className="fw-bold fnt-20 fnt-md-24 text-uppercase fnt-fly pt-2 text-center">
                                Emids
                            </h4>
                            <div className="text-center pb-3">
                                <button className="btn btn-primary update-btn py-1 text-uppercase fnt-fly">More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mb-3">
                        <div className="br-f9-1 pt-3 px-2 px-md-3 pt-md-4">
                            <img className="img-fluid" src={Payer} alt="Payer image" />
                            <h4 className="fw-bold fnt-20 fnt-md-24 text-uppercase fnt-fly pt-2 text-center">
                                Anthem
                            </h4>
                            <div className="text-center pb-3">
                                <button className="btn btn-primary update-btn py-1 text-uppercase fnt-fly">More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mb-3">
                        <div className="br-f9-1 pt-3 px-2 px-md-3 pt-md-4">
                            <img className="img-fluid" src={Payer} alt="Payer image" />
                            <h4 className="fw-bold fnt-20 fnt-md-24 text-uppercase fnt-fly pt-2 text-center">
                                CVS HealthCare
                            </h4>
                            <div className="text-center pb-3">
                                <button className="btn btn-primary update-btn py-1 text-uppercase fnt-fly">More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
