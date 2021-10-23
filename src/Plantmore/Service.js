import React from 'react';
import next from './img/next.png';
import one from './img/one.png';
import image from './img/image.png';
import two from './img/two.png';
import pac2 from './img/pac2.jpg';
import three from './img/three.png';


class Service extends React.Component {
    render() {
        return (

// <!--================ Start Packages Service Area =================-->

            <section class="package-area" style={{ marginTop: "10%" }}>
                <div class="container-fluid">

                    <div class="col-lg-5 col-md-12">
                        <div class="main_title"><br /><br /><br />
                            <h3 style={{ color: "#f44336" }}> What we do </h3>
                            <h1>Services provided for you</h1>
                            <p>Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum</p>
                            <a href="#" class="main_btn">
                                Browse all Packages
                                <img src={next} alt="" />
                            </a><br /><br /><br /><br />
                        </div>
                    </div>
                    <div class="col-lg-6 offset-lg-1 col-md-12">
                        <div class="owl-carousel active-gallery-carousel" style={{ marginLeft: "40%" }}>
                            {/* <!-- single gallery --> */}
                            <div class="single-gallery" >
                                <img class="img-fluid" src={one} alt="" />
                                <div class="gallery-content">
                                    <div class="title align-items-center justify-content-between d-flex">
                                        <center>	<a href="https://www.fylehq.com/" style={{ color: "whitesmoke", marginLeft: "25%" }}><button style={{ backgroundColor: "transparent", border: "3px solid whitesmoke", padding: "2px-7px" }}>Read more</button></a></center>

                                    </div>
                                    <h4 style={{ lineHeight: "20px", textAlign: "center" }}>Web Development</h4>
                                    <div class="review-title justify-content-between ">
                                        <p style={{ lineHeight: "20px", textAlign: "center" }}>Morbi sed lacus nec risus finibus feugiat et fermentum nibh.Pellentesque</p>
                                        <div class="review" style={{ textAlign: "center" }}>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                    </div>


                                </div>
                                <div class="light-box">
                                    <a href={image} class="img-popup">
                                        <span class="lnr lnr-pushpin"></span>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- single gallery --> */}
                            <div class="single-gallery">
                                <img class="img-fluid" src={two} alt="" />
                                <div class="gallery-content">
                                    <div class="title align-items-center justify-content-between d-flex">
                                        <center>	<a href="https://www.fylehq.com/" style={{ color: "whitesmoke", marginLeft: "25%" }}><button style={{ backgroundColor: "transparent", border: "3px solid whitesmoke", padding: "2px-7px" }}>Read more</button></a></center>

                                    </div>
                                    <h4 style={{ lineHeight: "20px", textAlign: "center" }}>Web Development</h4>
                                    <div class="review-title justify-content-between ">
                                        <p style={{ lineHeight: "20px", textAlign: "center" }}>Morbi sed lacus nec risus finibus feugiat et fermentum nibh.Pellentesque</p>
                                        <div class="review" style={{ textAlign: "center" }}>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                    </div>



                                </div>
                                <div class="light-box">
                                    <a href={pac2} class="img-popup">
                                        <span class="lnr lnr-pushpin"></span>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- single gallery --> */}
                            <div class="single-gallery">
                                <img class="img-fluid" src={three} alt="" />
                                <div class="gallery-content">
                                    <div class="title align-items-center justify-content-between d-flex">
                                        <center>	<a href="https://www.fylehq.com/" style={{ color: "whitesmoke", marginLeft: "25%" }}><button style={{ backgroundColor: "transparent", border: "3px solid whitesmoke", padding: "2px" - "7px" }}>Read more</button></a></center>

                                    </div>
                                    <h4 style={{ lineHeight: "20px", textAlign: "center" }}>Web Development</h4>
                                    <div class="review-title justify-content-between ">
                                        <p style={{ lineHeight: "20px", textAlign: "center" }}>Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque</p>
                                        <div class="review" style={{ textAlign: "center" }}>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="light-box">
                                    <a href={pac2} class="img-popup">
                                        <span class="lnr lnr-pushpin"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
);
}
}

export default Service;