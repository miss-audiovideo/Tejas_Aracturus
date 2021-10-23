import React from 'react';
import image from './img/image.png';

class Project extends React.Component {
  render() {
    return (
      
        <section id="sec-features" class="sec-features pt-5 pb-5" >
    <div class="container">
     <center> <h3 style={{color: "#f44336", marginTop: "-4%"}}> Our project </h3><br />
						<p style={{fontSize: "44px", marginTop: "-4%", color: "black", fontFamily: "Playfair Display, serif" , lineHeight: "60px"}}>Why we are the best</p></center>
<br /><br />
      <div class="row align-items-center">
		  
        <div class="col-md-6 text-center">
        {/* <!--<svg class="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g fill="#01305d"><path d="M387.03 28.2c39.65-.16 79.3-.06 118.95-.06 2.42-.14 3.81 3.24 2.07 4.9-1.01 1.24-2.68.87-4.06.93-38.69-.02-77.39.05-116.08-.01-3.37.31-4.01-4.92-.88-5.76zM324.49 57.5l1.33-.81c27.73-.04 55.46-.1 83.18.03 3.07.61 2.76 5.57-.36 5.76-27.23.08-54.47.02-81.71.03-2.6.44-4.57-3.24-2.44-5.01zM0 87.96c.82-3.02 3.87-5.05 6.97-4.67 166.05.01 332.1 0 498.15 0 3.03-.35 5.8 1.63 6.88 4.4v336.3c-.82 3-3.83 5.04-6.91 4.7h-498.12c-3.05.37-5.88-1.57-6.97-4.37v-336.36m12.17 7.09c-.02 1.59-.03 3.18.04 4.77-.09 104.34.07 208.68-.08 313.01l.67-.53c-1.25 1.17-.4 3.15-.63 4.66 2.47.06 4.94.08 7.4 0 155.47.06 310.93.02 466.4.02 2.13.22 4.28-.44 6.36.37l-.28-1.2.2.55c2.47.68 5.02.21 7.55.27.03-1.57.04-3.14-.03-4.7 0-104.12.12-208.24-.06-312.35.1-1.63.11-3.26.1-4.88-2.13-.08-4.26-.11-6.38 0-158.25-.09-316.51-.01-474.76-.05l.91.87c-1.93-1.79-5.01-.53-7.41-.81z"/></g><path fill="#1096fc" d="M12.17 95.05c2.4.28 5.48-.98 7.41.81 79.2 70.66 158.39 141.32 237.61 211.94 78.76-70.89 157.47-141.86 236.24-212.76 2.12-.11 4.25-.08 6.38 0 .01 1.62 0 3.25-.1 4.88-58.23 52.78-116.8 105.2-175.13 157.88 58.34 51.56 116.92 102.84 175.19 154.47.07 1.56.06 3.13.03 4.7-2.53-.06-5.08.41-7.55-.27l-.2-.55-.19-.56c-26.15-22.6-51.92-45.68-77.94-68.46l-95.28-83.94c-19.58 17.51-39.04 35.17-58.6 52.72-1.55 1.58-4.32 1.48-5.83-.1-17.48-15.58-34.94-31.18-52.43-46.76l-.45-.02c-60.58 49.31-121.15 98.64-181.76 147.93-2.46.08-4.93.06-7.4 0 .23-1.51-.62-3.49.63-4.66 60.92-49.62 121.85-99.21 182.8-148.78-61.12-54.57-122.36-109.02-183.39-163.7-.07-1.59-.06-3.18-.04-4.77z"/></svg>
      --> */}
        <img id="myImage" src={image} style={{width: "500px"}} /> </div>

        <div class="col-md-6">
         <button  onclick="document.getElementById('myImage').src='img/image.png'">
			<h3 style={{color: "black"}}>Genderless Kei – Japan’s Hot</h3>
			<h5 >Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of</h5></button>
         <button onclick="document.getElementById('myImage').src='img/ame1.jpg'">
			<h3 style={{color: "black"}}>Better Strategy & Quality</h3>
			<h5 >Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of</h5></button>
       <button>
          <button  onclick="document.getElementById('myImage').src='img/nwl-img.png'">	
			<h3 style={{color: "black"}}>Genderless Kei – Japan’s Hot</h3>
			<h5 >Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of</h5></button>
       </button>
           </div>
      </div>

      
    </div>
  </section>


    );
  }
}

export default Project;