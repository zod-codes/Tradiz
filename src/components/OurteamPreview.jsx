import Lottie from "lottie-react";
import rightArrow from "/public/assets/Icons/mTBbgVkjEm.json";
import { Link } from "react-router-dom";

const Ourteam = () => {
    return (
        <>
            <div className="container full-width">
                <div className="grid full-width">
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
                <div className="flex container full-width">
                    <div className="flex column align-items flex-basis-equal flex-grow-shrink-equal">
                        <div className="image">
                            {<img decoding="async" width="380" height="384" src="https://toka.peerduck.com/wp-content/uploads/2022/03/team-developer.png" alt="Max Kent Team Dev" srcSet="https://toka.peerduck.com/wp-content/uploads/2022/03/team-developer.png 380w, https://toka.peerduck.com/wp-content/uploads/2022/03/team-developer-297x300.png 297w, https://toka.peerduck.com/wp-content/uploads/2022/03/team-developer-100x100.png 100w" sizes="(max-width: 380px) 100vw, 380px" /> ?? <img decoding="async" src="/public/assets/Images/2022/03/team-developer.png" alt="Max Kent Team Dev" />}
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
                        <div className="image">
                            {<img decoding="async" width="380" height="384" src="https://toka.peerduck.com/wp-content/uploads/2022/01/team-member-07.png" alt="Moira Anderson Founder / C.E.O" srcSet="https://toka.peerduck.com/wp-content/uploads/2022/01/team-member-07.png 380w, https://toka.peerduck.com/wp-content/uploads/2022/01/team-member-07-297x300.png 297w, https://toka.peerduck.com/wp-content/uploads/2022/01/team-member-07-100x100.png 100w" sizes="(max-width: 380px) 100vw, 380px" /> ?? <img decoding="async" width="380" height="384" src="/public/assets/Images/2022/01/team-member-07.png" alt="Moira Anderson Founder / C.E.O" />}
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
                        <div className="image">
                            {<img loading="lazy" decoding="async" width="380" height="384" src="https://toka.peerduck.com/wp-content/uploads/2022/01/team-member-08.png" alt="Jeremy Gold Financial expert" srcSet="https://toka.peerduck.com/wp-content/uploads/2022/01/team-member-08.png 380w, https://toka.peerduck.com/wp-content/uploads/2022/01/team-member-08-297x300.png 297w, https://toka.peerduck.com/wp-content/uploads/2022/01/team-member-08-100x100.png 100w" sizes="(max-width: 380px) 100vw, 380px" /> ?? <img loading="lazy" decoding="async" src="/public/assets/Images/2022/01/team-member-08.png" alt="" />}
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
                </div>
                <Link to="/OurTeam" className="h3-header-widget container flex full-width align-items" id="link-to-page">
                    View all team
                    <Lottie animationData={rightArrow} className="lottie" />
                </Link>
            </div>
        </>
    );
}

export default Ourteam;