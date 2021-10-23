import React, { Component } from 'react';
import heart from './img/heart.svg';
import clock from './img/clock.svg';
import Path from './img/Path.svg';

export default class Growth extends Component {
    render() {
        return (
            <div>
                
                {/* <!--================ Start Amenities Area =================--> */}












<section class="amenities-area section_gap" >
    <div class="container">
        <div class="row align-items-end justify-content-center">
            <div class="col-lg-9">
                <div class="main_title">
                    <h3 style={{color: "tomato", textAlign: "center"}}>EXPERTS GROWTHS</h3>
                    <h1 style={{textAlign: "center"}}>Our company growth</h1>
                    
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            {/* <!-- single-blog --> */}
            <div class="col-lg-4 col-md-4 col-sm-6">
                    
                <div class="single-amenities">
                        
                    <div class="amenities-thumb">
                    <center><img class="img-fluid" src={heart} alt="" style={{paddingTop: "20%"}} /></center>
                    </div>
                    <div class="amenities-details">
                        <div class="amenities-meta">
                            <center><span >Satisfied clients</span></center>
                        
                        <center><h1 ><a href="#" style={{color: "tomato", fontSize: "60px"}}> 199+</a></h1></center>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- single-blog --> */}
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="single-amenities">
                    <div class="amenities-thumb">
                    <center>	<img class="img-fluid" src={clock} alt="" style={{paddingTop: "20%"}} /></center>
                    </div>
                    <div class="amenities-details">
                        <div class="amenities-meta">
                        <center><span >Days of operations</span></center>
                            <center><h1 ><a href="#" style={{color: "tomato", fontSize: "60px"}}> 1591+</a></h1></center>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* <!-- single-blog --> */}
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="single-amenities">
                    <div class="amenities-thumb">
                        <center><img class="img-fluid" src={Path} alt="" style={{paddingTop: "20%"}} /></center>
                    </div>
                    <div class="amenities-details">
                        <div class="amenities-meta">
                            <center><span >Completed projects</span></center>
                        
                        <center><h1 ><a href="#" style={{color: "tomato", fontSize: "60px"}}> 283+</a></h1></center>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </div>
</section>


            </div>
        );
    }
}
