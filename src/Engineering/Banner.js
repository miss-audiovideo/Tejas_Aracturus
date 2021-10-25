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

// class Banner extends React.Component {
//   render() {
//     return (
//       // <!--================ Start banner section =================-->
//       <div>
//         <Slider>
//           {slides.map((slide, index) => (
//             <div key={index}>
//               <h2>{slide.title}</h2>
//               <div>{slide.description}</div>
//               <img src={slide.img} alt="" />
//             </div>
//           ))}
//         </Slider>
//       </div>
//   <section class="home-banner-area relative">
//     <div class="container-fluid">
//       <div class="row d-flex align-items-center justify-content-center">
//         <div class="header-right col-lg-6 col-md-6">
//           <h3 style={{ color: "rgb(250, 66, 52)" }}>Award Winning</h3>
//           <h1>Digital Marketing Agency</h1>
//           <p class="pt-20">
//             Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
//             Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed
//             lacus nec risus finibus feugiat et fermentum{" "}
//           </p>

//           <a
//             href="#"
//             class="main_btn"
//             onclick="document.getElementById('id01').style.display='block'"
//             style={{
//               width: "auto",
//               fontSize: "14px",
//               backgroundColor: "rgb(250, 66, 52)",
//               color: "whitesmoke",
//               fontWeight: "bold",
//             }}
//           >
//             Get Started
//             <img src={next} alt="" />
//           </a>
//           <div id="id01" class="modal">
//             <span
//               onclick="document.getElementById('id01').style.display='none'"
//               class="close"
//               title="Close Modal"
//             >
//               &times;
//             </span>

//             <form
//               class="modal-content"
//               action="https://getform.io/f/b818f2fe-8178-4972-bb6b-fce6d38f8650"
//               method="POST"
//             >
//               <div class="container">
//                 <center>
//                   {" "}
//                   <h1>Talk to us</h1>
//                 </center>
//                 <hr />
//                 <label for="email">
//                   <b style={{ color: "#FF3147", fontSize: "20px" }}>
//                     Work Email
//                   </b>
//                 </label>
//                 <input type="text" placeholder="" name="email" required />

//                 <label for="first-name">
//                   <b style={{ color: "#FF3147", fontSize: "20px" }}>
//                     First Name
//                   </b>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder=""
//                   name="first-name"
//                   required
//                 />

//                 <label for="last-name">
//                   <b style={{ color: "#FF3147", fontSize: "20px" }}>
//                     Last Name
//                   </b>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder=""
//                   name="last-name"
//                   required
//                 />

//                 <label>
//                   <center>
//                     {" "}
//                     <input
//                       type="checkbox"
//                       name="subscribe"
//                       value="yes"
//                       checked
//                     />
//                     &nbsp; I agree to Fyle's{" "}
//                     <a href="#" style={{ color: "lightslategray" }}>
//                       Terms & Conditions
//                     </a>{" "}
//                     and provide consent to send me communications.
//                   </center>
//                 </label>

//                 <div class="clearfix">
//                   <button
//                     type="submit"
//                     class="signupbtn"
//                     style={{
//                       marginLleft: "25%",
//                       backgroundColor: "#FF3147",
//                     }}
//                   >
//                     {" "}
//                     Contact Us
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>

//         <div class="col-lg-6 col-md-4 header-center">
//           <div class="">
//             <center>
//               {" "}
//               <img class="img-fluid w-100" src={banner} alt="" />
//             </center>
//           </div>

//           <div class="watch"></div>
//         </div>
//       </div>
//     </div>
//   </section>
// <!--================ End banner section =================-->
// );
//   }
// }

export default Banner;
