import { useRef } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const hamburger = useRef();  

    function handleClick() {
        if (hamburger.current.checked == true) {
            console.log("NOT WORKING!!!");
        } else {
            console.log("CHECKED!!!");
        }
    }

    return (
        <>  
            <input type="checkbox" id="hamburger" ref={hamburger} />
            <header className="flex">
                <label htmlFor="hamburger" onClick={handleClick}>HAMBURGER</label>
                <img src="/assets/images/tradizlogo3.png" alt="" className="logo-styling" />

                <nav className="flex container">
                    <ul className="flex">
                        <input type="checkbox" id="nft" data-key />
                        <li>
                            <label htmlFor="nft" data-menu>
                                NFT
                            </label>
                            <div>
                                <ul className="menu grid">
                                    <li>
                                        <NavLink className="sub-menu" to="#">NFT Home Page</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="sub-menu" to="#">NFT Collection</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="sub-menu" to="#">NFT Platorm</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="sub-menu" to="#">NFT Marketplace</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="sub-menu" to="#">NFT Game</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="sub-menu" to="#">NFT DAO PLatform</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="sub-menu" to="#">NFT Website</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="sub-menu" to="#">Metaverse Website</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <input type="checkbox" id="crypto" data-key />
                        <li>
                            <label htmlFor="crypto" data-menu>
                                Crypto
                            </label>
                            <div>
                                <ul className="menu grid">
                                    <li>
                                        <NavLink className="sub-menu" to="#">Crypto Trading</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="sub-menu" to="#">Crypto Exchange</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="sub-menu" to="#">Blockchain Services</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="sub-menu" to="#">Crypto Cards</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="sub-menu" to="#">ICO</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="sub-menu" to="#">Crypto Startup</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="sub-menu" to="#">Payments with Crypto</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="sub-menu" to="#">Crypto Trading App</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="sub-menu" to="#">Defi Project Landing</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="sub-menu" to="#">Crypto Hardware Wallets</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="sub-menu" to="#">Crypto Wallet</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/AboutUs">About Us</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/OurTeam">Our Team</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/ContactUs">Contact Us</NavLink>
                        </li>
                        <input type="checkbox" id="online-shop" data-key />
                        <li>
                            <label htmlFor="online-shop" data-menu>
                                Online Shop
                            </label>
                            <div>
                                <ul className="menu grid">
                                    <li>
                                        <NavLink className="sub-menu" to="#">Shop</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="sub-menu" to="#">My Account</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="sub-menu" to="#">Cart</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="sub-menu" to="#">Checkout</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/Blogs">Blog</NavLink>
                        </li>
                    </ul>
                    <div className="button">Buy Now</div>
                </nav>
            </header>
        </>
    );
}

export default Navbar;