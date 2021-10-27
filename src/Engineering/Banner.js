import React from "react";
import toolone from "../Engineering/img/banner/toolone.jpg";
import tooltwo from "../Engineering/img/banner/tooltwo.jpg";
import toolthree from "../Engineering/img/banner/toolthree.jpg";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
// import "./Banner.css";
import { NavLink } from "react-router-dom";

const slides = [
  {
    title: "Welcome to all Industrial Business",
    description: "Natasha Romanoff confronts the darker parts of her ledger  ",
    image: toolone,
  },
  {
    title: "Captain america ",
    description:
      "Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose ofa Super-Soldier serum  ",
    image: tooltwo,
  },
  {
    title: "Iron Man",
    description:
      "After being held captive in an Afghan cave billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil",
    image: toolthree,
  },
];

const Banner = () => {
  return (
    <div>
      <Slider className="slider-wrapper" autoplay={3000} style={{}}>
        {slides.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{
              background: `url('${item.image}')`,
              // background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(15px)",
              width: "100%",
              height: "80%",
              opacity: "0.8",
              // boxSizing: "border-box",
              // overflow: "hidden",
              // objectPosition: "fit-to-display",
            }}
          >
            <div
              className="inner"
              style={{
                // backgroundColor: "black",
                width: "600px",
                // height: "max-content",
                // boxSizing: "border-box",
                // overflow: "Hidden",
              }}
            >
              <h1
                className="animate__animated animate__fadeInUp animate__delay-1s"
                style={{
                  marginTop: "150px",
                  marginLeft: "50px",
                  display: "flex",
                  justifyContent: "flex-start",
                  color: "#FBAD1A",
                  fontSize: "48px",
                  fontWeight: "bolder",
                }}
                // className="title  is-size-1-desktop is-size-3-mobile has-text-weight-bold "
              >
                {item.title}
              </h1>

              <p
                className="animate__animated animate__fadeInDown animate__delay-1s"
                style={{
                  color: "white",
                  fontSize: "24px",
                  // background: "rgba(255,255,255,0.1)",
                  // backdropFilter: "blur(15px)",
                }}
                // className="subtitle  is-size-5-desktop is-size-5-mobile has-text-weight-medium"
              >
                {item.description}
              </p>

              {/* <NavLink to={item.path} exact> */}
              {/* button is-rounded is-primary */}
              <button
                className="animate__animated animate__fadeInLeft animate__delay-1s"
                style={{
                  background: "#FBAD1A",
                  color: "white",
                  textDecoration: "none",
                  marginLeft: "100px",
                  padding: "10px",
                  // borderRadius: "10px",
                }}
              >
                Learn More
              </button>
              <button
                className="animate__animated animate__fadeInRight animate__delay-2s"
                style={{
                  background: "#072D4D",
                  color: "white",
                  textDecoration: "none",
                  marginLeft: "10px",
                  padding: "10px",
                  // borderRadius: "10px",
                }}
              >
                View Services
              </button>
              {/* </NavLink> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
    //       <div>
    //         <div class="wrapper">
    //           <input checked type="radio" name="slider" id="slide1" />
    //           <input type="radio" name="slider" id="slide2" />
    //           <input type="radio" name="slider" id="slide3" />
    //           <input type="radio" name="slider" id="slide4" />
    //           <input type="radio" name="slider" id="slide5" />

    //           <div
    //             class="slider-wrapper"
    //             style={{ backgroundColor: "black", color: "#fff", opacity: 0.5 }}
    //           >
    //             <div class="inner">
    //               <article>
    //                 <div className="info top-left has-text-centered">
    //                   <center>
    //                     <h1
    //                       classxName="has-text-centered"
    //                       style={{
    //                         color: "orange",
    //                         marginTop: "390px",
    //                         opacity: "1",
    //                       }}
    //                     >
    //                       We help Industries&nbsp;
    //                       <br />
    //                       <br />
    //                       <span style={{ color: "white", fontSize: "50px" }}>
    //                         Innovate and Grow
    //                       </span>
    //                     </h1>

    //                     <p
    //                       style={{
    //                         marginRight: "50px",
    //                         color: "white",
    //                         marginLeft: "-10px",
    //                       }}
    //                       className="has-text-centered"
    //                     >
    //                       will be always aware of all business and financial news
    //                       and stay informed
    //                       <br /> with investment tips, market predictions, business
    //                       advice and guides.
    //                     </p>
    //                   </center>
    //                 </div>{" "}
    //                 <img src="https://farm9.staticflickr.com/8059/28286750501_dcc27b1332_h_d.jpg" />
    //               </article>

    //               <article>
    //                 <div className="info top-left">
    //                   <h1
    //                     className="has-text-centered"
    //                     style={{
    //                       color: "orange",
    //                       marginTop: "390px",
    //                       opacity: "1",
    //                     }}
    //                   >
    //                     We help Industries&nbsp;
    //                     <br />
    //                     <br />
    //                     <span style={{ color: "white", fontSize: "38px" }}>
    //                       Innovate and Grow
    //                     </span>
    //                   </h1>
    //                   <p
    //                     style={{
    //                       marginRight: "80px",
    //                       color: "white",
    //                       marginLeft: "-10px",
    //                     }}
    //                   >
    //                     will be always aware of all business and financial news and
    //                     stay informed
    //                     <br /> with investment tips, market predictions, business
    //                     advice and guides.
    //                   </p>
    //                 </div>
    //                 <img src="https://farm8.staticflickr.com/7455/27879053992_ef3f41c4a0_h_d.jpg" />
    //               </article>

    //               <article>
    //                 {/* <div class="slide-h1 info top-left">
    //                  */}
    //                 <div className="slider-h1 info top-center">
    //                   <center>
    //                     <h1
    //                       style={{
    //                         color: "orange",
    //                         marginTop: "390px",
    //                         marginLeft: "200px",
    //                         opacity: "1",
    //                         display: "flex",
    //                         alignItems: "center",
    //                         justifyContent: "center",
    //                       }}
    //                     >
    //                       We help Industries&nbsp;
    //                       <br />
    //                       <br />
    //                       <span style={{ color: "white", fontSize: "59px" }}>
    //                         Innovate and Grow
    //                       </span>
    //                     </h1>
    //                   </center>
    //                   <p
    //                     style={{
    //                       marginRight: "80px",
    //                       color: "white",
    //                       marginLeft: "-10px",
    //                     }}
    //                   >
    //                     will be always aware of all business and financial news and
    //                     stay informed
    //                     <br /> with investment tips, market predictions, business
    //                     advice and guides.
    //                   </p>
    //                 </div>
    //                 <img src="https://farm8.staticflickr.com/7367/27980898905_72d106e501_h_d.jpg" />
    //               </article>

    //               <article>
    //                 <div className="info top-center has-text-centered">
    //                   <h1
    //                     style={{
    //                       color: "orange",
    //                       marginTop: "390px",
    //                       opacity: "1",
    //                     }}
    //                   >
    //                     We help Industries&nbsp;
    //                     <br />
    //                     <br />
    //                     <span style={{ color: "white", fontSize: "59px" }}>
    //                       Innovate and Grow
    //                     </span>
    //                   </h1>
    //                   <p
    //                     style={{
    //                       marginRight: "80px",
    //                       color: "white",
    //                       marginLeft: "-10px",
    //                     }}
    //                   >
    //                     will be always aware of all business and financial news and
    //                     stay informed
    //                     <br /> with investment tips, market predictions, business
    //                     advice and guides.
    //                   </p>
    //                 </div>
    //                 <img src="https://farm8.staticflickr.com/7356/27980899895_9b6c394fec_h_d.jpg" />
    //               </article>
    //             </div>
    //           </div>

    //           <div class="slider-prev-next-control">
    //             <label for="slide1"></label>
    //             <label for="slide2"></label>
    //             <label for="slide3"></label>
    //             <label for="slide4"></label>
    //             <label for="slide5"></label>
    //           </div>

    //           <div class="slider-dot-control">
    //             <label for="slide1"></label>
    //             <label for="slide2"></label>
    //             <label for="slide3"></label>
    //             <label for="slide4"></label>
    //             <label for="slide5"></label>
    //           </div>
    //         </div>
    //       </div>
    //     );
    //   }
    // }
  );
};
export default Banner;
