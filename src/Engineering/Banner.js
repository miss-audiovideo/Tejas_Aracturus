import React from "react";
import toolone from "../Engineering/img/banner/toolone.jpg";
import tooltwo from "../Engineering/img/banner/tooltwo.jpg";
import toolthree from "../Engineering/img/banner/toolthree.jpg";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
// import "./Banner.css";
// import { NavLink } from "react-router-dom";

const slides = [
  { title: "First item", description: "Lorem ipsum", image: toolone },
  { title: "Second item", description: "Lorem ipsum", image: tooltwo },
  { title: "Third item", description: "Lorem ipsum", image: toolthree },
];

const Banner = () => {
  return (
    <Slider>
      {slides.map((slide, index) => (
        <div key={index}>
          <h2
            style={{
              color: "orange",
            }}
          >
            {slide.title}
          </h2>
          <p>{slide.description}</p>
          <img src={slide.image}></img>
        </div>
      ))}
    </Slider>

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
