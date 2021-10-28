import React, { useState } from "react";
import "./nav.css";
import { GiHamburgerMenu } from "react-icons/gi";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav>
        <div className="logo">
          <img
            src={"https://bulma.io/images/bulma-logo.png"}
            width="112"
            height="28"
          />
        </div>
        <label for="btn" class="icon">
          <span>
            <GiHamburgerMenu />
          </span>
        </label>
        <input type="checkbox" id="btn" />
        <ul>
          <li>
            <label for="btn-1" class="show">
              PRODUCTS +
            </label>
            <Link to="/products">PRODUCTS</Link>
            <input type="checkbox" id="btn-1" />
            <ul>
              <li>
                <Link to="/products">CMX Sentinel</Link>
              </li>
              <li>
                <Link to="/products">CMX Stream</Link>
              </li>
            </ul>
          </li>
          <li>
            <label for="btn-2" class="show">
              Trendius +
            </label>
            <Link to="/trendius">Trendius</Link>
            <input type="checkbox" id="btn-2" />
            <ul>
              <li>
                <Link to="trendius">Predictive Analytics</Link>
              </li>
              <li>
                <Link to="trendius">Performance Analytics</Link>
              </li>
              {/* <li>
                <label for="btn-3" class="show">More +</label>
                <a href="#">More <span class="fa fa-plus"></span></a>
                <input type="checkbox" id="btn-3" />
                <ul>
                  <li><a href="#">Submenu-1</a></li>
                  <li><a href="#">Submenu-2</a></li>
                  <li><a href="#">Submenu-3</a></li>
                </ul>
              </li> */}
            </ul>
          </li>
          <li>
            <label for="btn-3" class="show">
              Engineering +
            </label>
            <Link to="/engineering">Engineering</Link>
            <input type="checkbox" id="btn-3" />
            <ul>
              <li>
                <Link to="/Engineering_Acoustics">Acoustics & Pulsation</Link>
              </li>
              <li>
                <Link to="/Engineering_Acoustics">Vibration and Noise</Link>
              </li>
              <li>
                <Link to="/Engineering_Acoustics">FMEA</Link>
              </li>
              <li>
                <Link to="/Engineering_Acoustics">
                  Intergrity & Reliability
                </Link>
              </li>
              <li>
                <Link to="/Engineering_Acoustics">Surge & Fluid Dynamics</Link>
              </li>
              <li>
                <Link to="/Engineering_Acoustics">Fitness for Services</Link>
              </li>
            </ul>
          </li>
          <li>
            <label for="btn-4" class="show">
              PlantMORE +
            </label>
            <Link to="/Plantmore_Balancing">PlantMORE</Link>
            <input type="checkbox" id="btn-4" />
            <ul>
              <li>
                <Link to="/Plantmore_Balancing">Turnaround</Link>
              </li>
              <li>
                <Link to="/Plantmore_Balancing">Balancing & Alignment</Link>
              </li>
              <li>
                <Link to="/Plantmore_Balancing">o&M</Link>
              </li>
              <li>
                <Link to="/Plantmore_Balancing">Commisioning and Startup</Link>
              </li>
              <li>
                <Link to="/Plantmore_Balancing">ESP</Link>
              </li>
              <li>
                <Link to="/Plantmore_Balancing">
                  Field COndition monitoring
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <label for="btn-5" class="show">
              Presprctives +
            </label>
            <Link to="/prespectives">Presprctives</Link>
            <input type="checkbox" id="btn-5" />
            <ul>
              <li>
                <Link to="/prespectives">Whitepaper</Link>
              </li>
              <li>
                <Link to="/prespectives">resources</Link>
              </li>
              <li>
                <Link to="/prespectives">blogs</Link>
              </li>
            </ul>
          </li>
          <li>
            <label for="btn-6" class="show">
              Company +
            </label>
            <Link to="/company">Company</Link>
            <input type="checkbox" id="btn-6" />
            <ul>
              <li>
                <Link to="/company">about us</Link>
              </li>
              <li>
                <Link to="/company">leadership</Link>
              </li>
              <li>
                <Link to="/company">policies</Link>
              </li>
              <li>
                <Link to="/company">sustanibility</Link>
              </li>
              <li>
                <Link to="/company/career">careers</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
