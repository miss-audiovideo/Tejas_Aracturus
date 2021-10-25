import React from "react";
import toolone from "../Engineering/img/banner/toolone.jpg";
import tooltwo from "../Engineering/img/banner/tooltwo.jpg";
import toolthree from "../Engineering/img/banner/toolthree.jpg";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./Banner.css";

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
      <Slider className="slider-wrapper" autoplay={3500}>
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
              {/* <NavLink to={item.path} exact> */}
              <button class="button is-rounded is-primary">
                {item.button}
              </button>
              {/* </NavLink> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};


export default Banner;
