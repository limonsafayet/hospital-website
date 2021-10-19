import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import logo from "../../assets/images/logo.png"

function Footer() {
    return (

        <footer className="text-center text-lg-start bg-light text-muted">

            <section
                className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
            >

                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>



                <div>
                    <a href="#" className="me-4 text-reset">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="me-4 text-reset">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="me-4 text-reset">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="#" className="me-4 text-reset">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="me-4 text-reset">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="me-4 text-reset">
                        <i className="fab fa-github"></i>
                    </a>
                </div>

            </section>



            <section className="">
                <div className="container text-center text-md-start mt-5">

                    <div className="row mt-3">

                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                <img src={logo} alt="LS Hospital Ltd" /> LS Hospital Ltd.
                            </h6>
                            <p>
                                Clinical excellence must be the priority for any health care service provider. LS Hospital Ltd ensures the best healthcare service comprise of professional (clinical) service excellence with outstanding personal service.
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <HashLink to="/home#home" className="text-reset">Home</HashLink>
                            </p>
                            <p>
                                <HashLink to="/home#services" className="text-reset">Services</HashLink>
                            </p>
                            <p>
                                <Link to="/doctors" className="text-reset">Doctors</Link>
                            </p>
                            <p>
                                <Link to="/contact-us" className="text-reset">Contact Us</Link>
                            </p>
                        </div>



                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                Contact
                            </h6>
                            <p><i className="fas fa-home me-3"></i> Gulshan Main Road, Dhaka</p>
                            <p>
                                <i className="fas fa-envelope me-3"></i>
                                info@lshospital.com
                            </p>
                            <p><i className="fas fa-phone me-3"></i> +88 01713377755</p>
                            <p><i className="fas fa-print me-3"></i> +88 02 8145682</p>
                        </div>

                    </div>

                </div>
            </section>



            <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                © 2021 Copyright: <b>LS Hospital Ltd.</b>

            </div>

        </footer>

    )
}

export default Footer
