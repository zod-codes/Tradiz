import Lottie from "lottie-react";
import PlayButton from "/public/assets/Icons/VG08dlhLyu.json";

const Forbeginners = () => {
    return (
        <>
            <div className="container flex full-width">
                <div className="bg-image flex-basis-equal flex center-content align-items">
                    <a href="https://www.youtube.com/watch?v=https://www.youtube.com/watch?v=vA_j6rjsBec">
                    <Lottie animationData={PlayButton} className="lottie"/>
                    </a>
                </div>
                <div className="grid flex-basis-equal">
                    <h3 className="h3-header-widget">
                    FOR BEGINNERS
                    </h3>
                    <h2 className="h2-header-widget">
                    Watch our crypto guide for beginners
                    </h2>
                    <p className="p-widget">
                    Invest in Bitcoin, Ethereum, USDT, and other cryptocurrencies using our crypto trading app. The Bitcoin and cryptocurrency markets have experienced a surge in volume recently, making it an exciting time to become a trader. Cryptocurrency markets have seen an increase in volume in recent weeks, which is a great opportunity for new traders.
                    </p>
                    <div className="button button-drk-color">Learn more</div>
                </div>
            </div>
        </>
    );
}

export default Forbeginners;