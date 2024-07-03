import Lottie from "lottie-react";
import Locations from "../components/Locations";
import OurmissionContact from "../components/OurmissionContact";
import rightArrow from "/public/assets/Icons/mTBbgVkjEm.json";
import { Link } from "react-router-dom";

const ContactUs = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="container grid text-align-center">
                        <h3 className="h3-header-widget">
                            GET IN-TOUCH
                        </h3>
                        <h2 className="h2-header-widget">
                            Contact information
                        </h2>
                        <p className="p-widget">
                            Our company was founded in 2020. We work daily to become better and we are ready to share best practices.
                        </p>
                    </div>
                    <div className="container flex">
                        <div className="flex column flex-basis-equal">
                            <div className="office-info flex column">
                                <h2 className="h2-title">
                                    Head office
                                </h2>
                                <a href="https://goo.gl/maps/XyANinc4EoxHZguc9" className="p-widget">
                                    202 Helga Springs Rd, Crawford, TN 38554
                                </a>
                                <a href="https://toka.peerduck.com/contact-us-dark/tel:800.275.8777" className="p-widget">
                                    800.275.8777
                                </a>
                                <a href="https://telegram.me/telegram" className="p-widget">
                                    Telegram Support
                                </a>
                            </div>
                            <div className="open-hrs flex column">
                                <h2 className="h2-title">
                                    Opening hours
                                </h2>
                                <p className="p-widget">
                                    Monday: 8:00 – 17:00
                                </p>
                                <p className="p-widget">
                                    Tuesday: 8:00 – 17:00
                                </p>
                                <p className="p-widget">
                                    Wednesday: 8:00 – 17:00
                                </p>
                                <p className="p-widget">
                                    Thursday: 8:00 – 17:00
                                </p>
                                <p className="p-widget">
                                    Friday: 8:00 – 17:00
                                </p>
                                <p className="p-widget">
                                    Saturday: 10:00 – 16:00
                                </p>
                                <p className="p-widget">
                                    Sunday: CLOSED
                                </p>
                            </div>
                        </div>
                        <div className="form flex-basis-equal">
                            <form action="mailto:zodotaru@gmail.com">
                                <h2 className="h2-title">
                                    Send us a message
                                </h2>
                                <div className="input flex column">
                                    <label htmlFor="name">
                                        Your name
                                    </label>
                                    <input type="text" id="name" name="Name" />
                                </div>
                                <div className="input flex column">
                                    <label htmlFor="email">
                                        Your email
                                    </label>
                                    <input type="email" id="email" name="E-mail" />
                                </div>
                                <div className="text-area flex column">
                                    <label htmlFor="message">
                                        Your message
                                    </label>
                                    <textarea name="message" id="message"></textarea>
                                </div>
                                <button type="submit" className="button">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                    <OurmissionContact />
                    <div className="flex container">
                        <div>
                            <div className="grid center-items">
                                <img decoding="async" src="/assets/images/2022/03/chat.png" />
                                <h2 className="h2-title">
                                    Ask Questions
                                </h2>
                                <p className="p-widget">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam rerum consequatur. Nesciunt, magni non. Neque voluptates delectus eum corporis excepturi velit repellendus doloremque atque, vel sunt itaque fuga voluptatum.
                                </p>

                                <Link className="h3-header-widget container flex full-width align-items" id="link-to-page">
                                    Learn More
                                    <Lottie animationData={rightArrow} className="lottie" />
                                </Link>

                            </div>
                        </div>
                        <div>
                            <div className="grid center-items">
                                <img decoding="async" src="/assets/images/2022/03/shipping.png" alt="" className="tiny-picture" />
                                <h2 className="h2-title">
                                    Partnerships
                                </h2>
                                <p className="p-widget">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolorum, quis consectetur non amet reprehenderit labore recusandae est, dolore iure quod eligendi corrupti error eaque ullam repellat possimus! Exercitationem, non?
                                </p>

                                <Link className="h3-header-widget container flex full-width align-items" id="link-to-page">
                                    Learn More
                                    <Lottie animationData={rightArrow} className="lottie" />
                                </Link>

                            </div>
                        </div>
                        <div>
                            <div className="grid center-items">
                                <img decoding="async" src="/assets/images/2022/03/protection.png" alt="" className="tiny-picture" />
                                <h2 className="h2-title">
                                    Career
                                </h2>
                                <p className="p-widget">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum magni quae enim voluptate velit labore voluptates itaque, ullam non, tempora tempore amet asperiores dolores repudiandae est nulla, hic molestiae vel!.
                                </p>

                                <Link className="h3-header-widget container flex full-width align-items" id="link-to-page">
                                    Learn More
                                    <Lottie animationData={rightArrow} className="lottie" />
                                </Link>

                            </div>
                        </div>
                    </div>
                    <Locations />
                </div>
            </section>

        </>
    );
}

export default ContactUs;