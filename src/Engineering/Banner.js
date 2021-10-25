import React from "react";
import toolone from "../Engineering/img/banner/toolone.jpg";
import tooltwo from "../Engineering/img/banner/tooltwo.jpg";
import toolthree from "../Engineering/img/banner/toolthree.jpg";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./Banner.css";
// import { NavLink } from "react-router-dom";

// const slides = [
//   { title: "First item", description: "Lorem ipsum", img: { next } },
//   { title: "Second item", description: "Lorem ipsum", img: { banner } },
// ];

const slides = [
  {
    title: "Rotating Equipment",
    description:
      "Our expertise in Rotating Equipment Engineering helps you achieve peak performance.",
    button: "Explore More",
    image: toolone,
    // path: "/rotatingequipment",
  },
  {
    title: "Mechanical Engineering",
    description:
      "Our expertise in mechanical engineering helps you manage risks and reduce costs.",
    button: "Explore More",
    image: tooltwo,
    // path: "/mechanicalengineering",
  },
  {
    title: "Digitalization",
    description: "Our augumented technologies helps Industry 4.0 move forward.",
    button: "Explore More",
    image: toolthree,
    // path: "/digitalization",
  },
  {
    title: "Plant Services",
    description:
      "Our best maintenance practices helps you achieve top quartile performance.",
    button: "Explore More",
    image: tooltwo,
    // path: "/services",
  },
];

const Banner = () => {
  return (
    <div>
      {/* <Slider className="slider-wrapper" autoplay={3500}>
        {slides.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{
              background: `url('${item.image}') no-repeat center center`,
            }}
          >
            <div className="inner">
              <p className="title  is-size-1-desktop is-size-3-mobile has-text-weight-bold ">
                {item.title}
              </p>

              <p className="subtitle  is-size-5-desktop is-size-5-mobile has-text-weight-medium">
                {item.description}
              </p>
              <NavLink to={item.path} exact>
              <button class="button is-rounded is-primary">
                {item.button}
              </button>
              </NavLink>
            </div>
          </div>
        ))}
      </Slider> */}
      <Slider className="slider-wrapper" autoplay={2500}>
        {slides.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{
              background: `url('${item.image} ')`,
              width: `100%`,
              height: `400px`,
              opacity: `0.7`,
            }}
          >
            <div
              className="inner"
              style={{
                display: `flex`,
                flexDirection: `column`,
                alignItems: `center`,
                justifyContent: `center`,
                color: `black`,
              }}
            >
              <h1
                className="title animate__animated animate__fadeInDown animate__delay-2s"
                style={{
                  color: `orange`,
                  fontSize: `38px !important`,
                  background: `black`,
                  padding: `15px`,
                  borderRadius: `10px`,
                }}
              >
                {item.title}
              </h1>
              <br />
              <p
                className="subtitle animate__animated animate__fadeInUp animate__slower animate__delay-2s"
                style={{
                  color: `red`,
                  fontSize: `28px !important`,
                  fontWeight: `bold`,
                  background: `black`,
                  padding: `10px`,
                  borderRadius: `5px`,
                }}
              >
                {item.description}
              </p>

              <button
                class="button"
                style={{
                  color: `white`,
                  fontSize: `28px !important`,
                  fontWeight: `bold`,
                  background: `blue`,
                  // padding: `10px`,
                  borderRadius: `5px`,
                  textDecoration: `none`,
                }}
              >
                {item.button}
              </button>
            </div>
          </div>
        ))}
      </Slider>
      <style jsx>{``}</style>
    </div>
  );
};

export default Banner;
