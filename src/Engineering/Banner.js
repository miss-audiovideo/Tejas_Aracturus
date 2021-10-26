import React from "react";
import toolone from "../Engineering/img/banner/d.jpg";
import tooltwo from "../Engineering/img/banner/g.jpg";
import toolthree from "../Engineering/img/banner/p.jpg";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./Banner.css";
// import { NavLink } from "react-router-dom";

// const slides = [
//   { title: "First item", description: "Lorem ipsum", img: { next } },
//   { title: "Second item", description: "Lorem ipsum", img: { banner } },
// ];



 class Banner extends React.Component {
  render() {
      return (
          <div>

<div class="wrapper">
  <input checked type="radio" name="slider" id="slide1" />
  <input type="radio" name="slider" id="slide2" />
  <input type="radio" name="slider" id="slide3" />
  <input type="radio" name="slider" id="slide4" />
  <input type="radio" name="slider" id="slide5" />

  <div class="slider-wrapper" style={ {backgroundColor:"black",color: "#fff",
    opacity: .5}}>
    <div class="inner">
      <article>
        <div class="info top-left" >
          <h1 style={{color:"orange",marginTop:"390px",opacity:"1"}}>We help Industries&nbsp;<br/><br/>
<span style={{color:"white", fontSize:"38px"}}>Innovate and Grow</span></h1>
<p style={{marginRight:"80px",color:"white",marginLeft:"-10px"}}>
  will be always aware of all business and financial news and stay informed<br/> with
investment tips, market predictions, business advice and guides.</p>
</div> <img src="https://farm9.staticflickr.com/8059/28286750501_dcc27b1332_h_d.jpg" />
      </article>

      <article>
      <div class="info top-left" >
          <h1 style={{color:"orange",marginTop:"390px",opacity:"1"}}>We help Industries&nbsp;<br/><br/>
<span style={{color:"white", fontSize:"38px"}}>Innovate and Grow</span></h1>
<p style={{marginRight:"80px",color:"white",marginLeft:"-10px"}}>
  will be always aware of all business and financial news and stay informed<br/> with
investment tips, market predictions, business advice and guides.</p>
</div>
        <img src="https://farm6.staticflickr.com/5812/23394215774_b76cd33a87_h_d.jpg" />
      </article>

      <article>
      <div class="info top-left" >
          <h1 style={{color:"orange",marginTop:"390px",opacity:"1"}}>We help Industries&nbsp;<br/><br/>
<span style={{color:"white", fontSize:"38px"}}>Innovate and Grow</span></h1>
<p style={{marginRight:"80px",color:"white",marginLeft:"-10px"}}>
  will be always aware of all business and financial news and stay informed<br/> with
investment tips, market predictions, business advice and guides.</p>
</div>
        <img src="https://farm8.staticflickr.com/7455/27879053992_ef3f41c4a0_h_d.jpg" />
      </article>

      <article>
      <div class="info top-left" >
          <h1 style={{color:"orange",marginTop:"390px",opacity:"1"}}>We help Industries&nbsp;<br/><br/>
<span style={{color:"white", fontSize:"38px"}}>Innovate and Grow</span></h1>
<p style={{marginRight:"80px",color:"white",marginLeft:"-10px"}}>
  will be always aware of all business and financial news and stay informed<br/> with
investment tips, market predictions, business advice and guides.</p>
</div>
        <img src="https://farm8.staticflickr.com/7367/27980898905_72d106e501_h_d.jpg" />
      </article>

      <article>
      <div class="info top-left" >
          <h1 style={{color:"orange",marginTop:"390px",opacity:"1"}}>We help Industries&nbsp;<br/><br/>
<span style={{color:"white", fontSize:"38px"}}>Innovate and Grow</span></h1>
<p style={{marginRight:"80px",color:"white",marginLeft:"-10px"}}>
  will be always aware of all business and financial news and stay informed<br/> with
investment tips, market predictions, business advice and guides.</p>
</div>
        <img src="https://farm8.staticflickr.com/7356/27980899895_9b6c394fec_h_d.jpg" />
      </article>
    </div>
 
  </div>
 

  <div class="slider-prev-next-control">
    <label for="slide1"></label>
    <label for="slide2"></label>
    <label for="slide3"></label>
    <label for="slide4"></label>
    <label for="slide5"></label>
  </div>
  

  <div class="slider-dot-control">
    <label for="slide1"></label>
    <label for="slide2"></label>
    <label for="slide3"></label>
    <label for="slide4"></label>
    <label for="slide5"></label>
  </div>

</div>  
          </div>

      );
  }
}


export default Banner;
