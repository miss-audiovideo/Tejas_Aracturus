import React, { useState } from "react";
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
          <nav className="main-nav">
        <div className="logo">
          <img
            src={"https://bulma.io/images/bulma-logo.png"}
            width="112"
            height="28"
          />
        </div>
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
          <div className="navbar-item has-dropdown is-hoverable">
              <Link to="/products" className="navbar-link">
                PRODUCTS
              </Link>

              <div className="navbar-dropdown">
                <Link to="/products" className="navbar-item toggle-item">
                  CMX Sentinel
                </Link>
                <Link to="/products" className="navbar-item toggle-item">
                  CMX Stream
                </Link>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link to="trendius" className="navbar-link">
                Trendius
              </Link>

              <div className="navbar-dropdown">
                <Link to="trendius" className="navbar-item toggle-item">
                  Predictive Analytics
                </Link>
                <Link to="trendius" className="navbar-item toggle-item">
                  Performance Analytics
                </Link>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link to="trendius" className="navbar-link">
                Engineering
              </Link>

              <div className="navbar-dropdown">
                <Link
                  exact
                  to="/Engineering_Acoustics"
                  className="navbar-item  toggle-item"
                  onClick={() => console.log("tejas")}
                >
                  Acoustics & Pulsation
                </Link>

                <Link to="/Engineering_Acoustics" className="navbar-item toggle-item">
                  Vibration and Noise
                </Link>
                <Link to="/Engineering_Acoustics" className="navbar-item toggle-item">
                  FMEA
                </Link>

                <Link to="/Engineering_Acoustics" className="navbar-item toggle-item">
                  Intergrity & Reliability
                </Link>
                <Link to="/Engineering_Acoustics" className="navbar-item toggle-item">
                  Surge & Fluid Dynamics
                </Link>
                <Link to="/Engineering_Acoustics" className="navbar-item toggle-item">
                  Fitness for Services
                </Link>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link to="/Plantmore_Balancing" className="navbar-link">
                PlantMORE
              </Link>

              <div className="navbar-dropdown">
                <Link to="/Plantmore_Balancing" className="navbar-item toggle-item">
                  Turnaround
                </Link>
                <Link to="/Plantmore_Balancing" className="navbar-item toggle-item">
                  Balancing & Alignment
                </Link>
                <Link to="/Plantmore_Balancing" className="navbar-item toggle-item">
                  o&M
                </Link>

                <Link to="/Plantmore_Balancing" className="navbar-item toggle-item">
                  Commisioning and Startup
                </Link>
                <Link to="/Plantmore_Balancing" className="navbar-item toggle-item">
                  ESP
                </Link>
                <Link to="/Plantmore_Balancing" className="navbar-item toggle-item">
                  Field COndition monitoring
                </Link>
              </div>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <Link to="/prespectives" className="navbar-link">
                Presprctives
              </Link>

              <div className="navbar-dropdown">
                <Link to="/prespectives" className="navbar-item toggle-item">
                  Whitepaper
                </Link>
                <Link to="/prespectives" className="navbar-item toggle-item">
                  resources
                </Link>
                <Link to="/prespectives" className="navbar-item toggle-item">
                  blogs
                </Link>
              </div>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <Link to="/company" className="navbar-link">
                Company
              </Link>

              <div className="navbar-dropdown">
                <Link to="/company" className="navbar-item toggle-item">
                  about us
                </Link>
                <Link to="/company" className="navbar-item  toggle-item">
                  leadership
                </Link>
                <Link className="navbar-item  toggle-item">policies</Link>

                <Link to="/company" className="navbar-item toggle-item">
                  sustanibility
                </Link>
                <Link to="/company/career" className="navbar-item toggle-item">
                  careers
                </Link>
              </div>
            </div>
          </ul>
        </div>

        <div className="social-media">
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
