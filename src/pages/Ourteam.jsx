import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import rightArrow from "/public/assets/Icons/mTBbgVkjEm.json";

const Ourteam = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="container grid text-align-center our-team-page">
                        <h3 className="h3-header-widget">
                            OUR TEAM
                        </h3>
                        <h2 className="h2-header-widget">
                            Meet our crypto experts
                        </h2>
                        <p className="p-widget">
                            Our company was founded in 2020. We work daily to become better and we are ready to share best practices.
                        </p>
                    </div>

                    <div className="flex container full-width" id="our-team-page">
                        <div className="flex column align-items flex-basis-equal flex-grow-shrink-equal">
                            <div className="image our-team-page-image">
                                <img decoding="async" src="/public/assets/Images/2022/03/team-developer.png" alt="Max Kent Team Dev" className="tiny-picture" />
                            </div>
                            <div className="full-width">
                                <h2 className="h2-header-widget">
                                    Max Kent
                                </h2>
                                <p className="p-widget">
                                    Senior developer
                                </p>
                            </div>
                        </div>

                        <div className="flex column align-items flex-basis-equal flex-grow-shrink-equal">
                            <div className="image our-team-page-image">
                                <img decoding="async" width="380" height="384" src="/public/assets/Images/2022/01/team-member-07.png" alt="Moira Anderson Founder / C.E.O" className="tiny-picture" />
                            </div>
                            <div className="full-width">
                                <h2 className="h2-header-widget">
                                    Moira Anderson
                                </h2>
                                <p className="p-widget">
                                    Marketing Manager
                                </p>
                            </div>
                        </div>

                        <div className="flex column align-items flex-basis-equal flex-grow-shrink-equal">
                            <div className="image our-team-page-image">
                                <img loading="lazy" decoding="async" src="/public/assets/Images/2022/01/team-member-08.png" alt="Jeremy Gold Financial expert" className="tiny-picture" />
                            </div>
                            <div className="full-width">
                                <h2 className="h2-header-widget">
                                    Jeremy Gold
                                </h2>
                                <p className="p-widget">
                                    Financial expert
                                </p>
                            </div>
                        </div>

                        <div className="flex column align-items flex-basis-equal flex-grow-shrink-equal">
                            <div className="image our-team-page-image">
                                <img loading="lazy" decoding="async" src="/public/assets/Images/2022/01/tream-1.png" alt="Mike Jones Developer" className="tiny-picture" />
                            </div>
                            <div className="full-width">
                                <h2 className="h2-header-widget">
                                    Mike Jones
                                </h2>
                                <p className="p-widget">
                                    Developer
                                </p>
                            </div>
                        </div>

                        <div className="flex column align-items flex-basis-equal flex-grow-shrink-equal">
                            <div className="image our-team-page-image">
                                <img loading="lazy" decoding="async" src="/public/assets/Images/2022/01/team-member-09.png" alt="Jack Adams Founder" className="tiny-picture" />
                            </div>
                            <div className="full-width">
                                <h2 className="h2-header-widget">
                                    Jack Adams
                                </h2>
                                <p className="p-widget">
                                    Founder and C.E.O
                                </p>
                            </div>
                        </div>

                        <div className="flex column align-items flex-basis-equal flex-grow-shrink-equal">
                            <div className="image our-team-page-image">
                                <img loading="lazy" decoding="async" src="/public/assets/Images/2022/01/team-member-06.png" alt="Anita Geller Senior Consultant" className="tiny-picture" />
                            </div>
                            <div className="full-width">
                                <h2 className="h2-header-widget">
                                    Anita Geller
                                </h2>
                                <p className="p-widget">
                                    Senior Consultant
                                </p>
                            </div>
                        </div>

                        <div className="flex column align-items flex-basis-equal flex-grow-shrink-equal">
                            <div className="image our-team-page-image">
                                <img loading="lazy" decoding="async" src="https://toka.peerduck.com/wp-content/uploads/2022/01/team-member-04.png" alt="Rita Love Accountant" className="tiny-picture" />
                            </div>
                            <div className="full-width">
                                <h2 className="h2-header-widget">
                                    Rita Love
                                </h2>
                                <p className="p-widget">
                                    Snr. Accountant
                                </p>
                            </div>
                        </div>

                        <div className="flex column align-items flex-basis-equal flex-grow-shrink-equal">
                            <div className="image our-team-page-image">
                                <img loading="lazy" decoding="async" src="/public/assets/Images/2022/01/team-member-05.png" alt="Anita Gold Senior Consultant" className="tiny-picture" />
                            </div>
                            <div className="full-width">
                                <h2 className="h2-header-widget">
                                Paul Jin
                                </h2>
                                <p className="p-widget">
                                Creative Manager
                                </p>
                            </div>
                        </div>

                        <div className="flex align-items flex-basis-equal flex-grow-shrink-equal" id="apply-here">
                            <span className="flex column full-width">
                                <h2 className="h2-header-widget">
                                    Want to join our team?
                                </h2>
                                <Link id="link-to-page" className="flex align-items" to="/ContactUs">
                                    Apply Here
                                    <Lottie animationData={rightArrow} className="lottie" />
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Ourteam;