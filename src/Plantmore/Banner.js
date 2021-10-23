import React from 'react';
import next from './img/next.png'
import banner from './img/banner/banner.png'

class Banner extends React.Component {
    render() {
        return (


            // <!--================ Start banner section =================-->  
            < section class="home-banner-area relative" >
                <div class="container-fluid">
                    <div class="row d-flex align-items-center justify-content-center">
                        <div class="header-right col-lg-6 col-md-6">
                            <h3 style={{ color: "rgb(250, 66, 52)" }}>Award Winning</h3>
                            <h1>
                                Digital Marketing Agency

                            </h1>
                            <p class="pt-20">
                                Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum	</p>




                            <a href="" class="main_btn" onclick="document.getElementById('id01').style.display='block'" style={{ width: 'auto', fontSize: '14px', backgroundColor: 'rgb(250, 66, 52)', color: 'whitesmoke', fontWeight: 'bold' }}>
                                Get Started
                                <img src={next} alt="" />
                            </a>
                            <div id="id01" class="modal">
                                <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>



                                <form class="modal-content" action="https://getform.io/f/b818f2fe-8178-4972-bb6b-fce6d38f8650" method="POST">
                                    <div class="container">
                                        <center>  <h1>Talk to us</h1>
                                        </center>
                                        <hr />
                                        <label for="email"><b style={{ color: "#FF3147", fontSize: "20px" }}>Work Email</b></label>
                                        <input type="text" placeholder="" name="email" required />

                                        <label for="first-name"><b style={{ color: "#FF3147", fontSize: "20px" }} >First Name</b></label>
                                        <input type="text" placeholder="" name="first-name" required />

                                        <label for="last-name"><b style={{ color: "#FF3147", fontSize: "20px" }}  >Last Name</b></label>
                                        <input type="text" placeholder="" name="last-name" required />

                                        <label>
                                            <center> <input type="checkbox" name="subscribe" value="yes" checked />&nbsp; I agree to Fyle's <a href="#" style={{ color: "lightslategray" }}>Terms & Conditions</a> and provide consent to send me communications.</center>
                                        </label>


                                        <div class="clearfix">

                                            <button type="submit" class="signupbtn" style={{ marginLleft: "25%", backgroundColor: "#FF3147" }}> Contact Us</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-4 header-center">
                            <div class="">
                                <center>	<img class="img-fluid w-100" src={banner} alt="" /></center>
                            </div>

                            <div class="watch">

                            </div>
                        </div>
                    </div>
                </div>
            </section >        
// <!--================ End banner section =================-->

);
}
}

export default Banner;