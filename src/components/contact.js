import React from "react";
import { Layout } from "../layout/layout";
import emailjs from 'emailjs-com';
import Cart from '../assets/images/cart.png'

export const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();
        // https://www.emailjs.com/ for params
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
        emailjs.sendForm('service_t6u6ogd', 'template_pohljbk', e.target, 'Tbv1CejqNwXHt_8nF')
            .then((result) => {
                console.log('Email sent successfully:', result.text);
            }, (error) => {
                console.error('Email send error:', error.text);
            });
    };
    return (
        <Layout active={"contact"}>
            <div className="contact bg-clref">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 bg-clr70 py-4 px-3 py-md-5 px-md-4">
                            <h1 className="text-white">CONTACT US TODAY!</h1>
                            <form onSubmit={sendEmail}>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label text-white fw-bold">Your Name (required)</label>
                                    <input type="text" name="from_name" className="form-control fw-bold" placeholder="Recipient Name" required />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label text-white fw-bold">Your Email (required)</label>
                                    <input type="email" name="from_email" className="form-control fw-bold" placeholder="Recipient Email" required />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label text-white fw-bold">Subject</label>
                                    <input type="text" name="subject" className="form-control fw-bold" placeholder="Subject" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label text-white fw-bold">Your Message</label>
                                    <textarea name="message" rows={8} className="form-control fw-bold" placeholder="Message" />
                                </div>
                                <button type="submit" className="btn btn-primary">Send</button>
                            </form>
                        </div>
                        <div className="col-12 col-md-6">
                            <img className="img-fluid" src={Cart} alt="Cart" />
                            <div className="p-4">
                                <h4 className="ps-3">LET'S START SOMETHING TOGETHER!</h4>
                                <ul>
                                    <li>Please feel free to contact us if you have questions or would like to find out more information about our services:
                                        <ul>
                                            <li>EHR Implementation &amp; Optimization</li>
                                            <li>Payer IT &amp; Business Operations Support</li>
                                            <li>Real-Time Location Services (RTLS)</li>
                                            <li>Revenue Recovery Services</li>
                                            <li>and <strong><a href="https://healthallconsult.com/services/">so much more!</a></strong></li>
                                        </ul>
                                    </li>
                                </ul>
                                <h4>CONTACT DETAILS</h4>
                            </div>

                        </div>
                        <div className="col-12 py-4 px-lg-0">
                            <h2>LOOKING FOR YOUR NEXT CAREER?</h2>
                            <p>HealthAll Consulting provides experts in area of operations and information technology management consulting services, specifically for the healthcare industry. Our firm delivers “Subject Matter Experts” when it comes to healthcare business needs. We are committed to helping Health Plans, Hospitals and Integrated Delivery Systems, reduce cost. HealthAll Consulting hires only the very best; experienced in assisting healthcare organizations with improving the effectiveness of their operations and information technology infrastructures.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
