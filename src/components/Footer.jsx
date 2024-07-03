import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
    const [bool, setBool] = useState(false);
    const btnClass = bool && (window.innerWidth <= 1550 && window.innerWidth > 767) ? "active" : "";
    const containerEmail = (bool && window.innerWidth <= 1200 ? "activeSW" : "") || (bool && window.innerWidth > 1200 ? "active" : "");

    const handleClick = () => {
        setBool(bool => !bool);
    };

    return (
        <>
            <footer>
                <div className="container flex column">
                    <div className="flex">
                        <div className="grid flex-grow-shrink-equal">
                            <img src="/assets/images/tradizlogo3.png" alt="" className="logo-styling" />
                            <p className="p-widget">
                                Reinventing the way of creating websites, we aim to create the most master-peaced WordPress theme available on the market.
                            </p>
                        </div>
                        <div className="grid flex-grow-shrink-equal">
                            <h4 className="h4-title green-margin">CONTACT US</h4>
                            <p className="p-widget">
                                202 Helga Springs Rd, Crawford, TN 38554
                            </p>
                            <p className="p-widget">
                                Call Us: <strong>800.275.8777</strong>
                            </p>
                            <p className="p-widget">alex@company.com</p>
                        </div>
                        <div className="grid flex-grow-shrink-equal content-items">
                            <h4 className="h4-title green-margin">SIGN UP FOR EMAIL UPDATES</h4>
                            <div className={`flex ${containerEmail}`}>
                                <input type="email" placeholder="Your E-mail" name="sub" onClick={handleClick} />
                                <button className={`button ${btnClass}`} id="sub">Subscribe </button>
                            </div>
                            <p className="p-widget">
                                Sign up with your email address to receive news and updates
                            </p>
                        </div>
                    </div>
                    <div className="flex">
                        <p className="p-widget flex-grow-shrink-equal copyright">Copyright ©2024 Tradiz. All rights reserved.</p>
                        <div className="flex flex-grow-shrink-equal center-content">
                            <p className="p-widget">Home</p>
                            <NavLink to="/AboutUs" className="p-widget nav-link">About Us</NavLink>
                            <NavLink to="/OurTeam" className="p-widget nav-link">Our Team</NavLink>
                            <p className="p-widget nav-link">Shop</p>
                            <p className="p-widget nav-link">Blog</p>
                            <NavLink to="/ContactUs" className="p-widget nav-link">Contact Us</NavLink>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;