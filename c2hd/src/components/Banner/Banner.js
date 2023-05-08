import React from 'react';
import "./Banner.css";
import bannerImage from './banner.jpg';


const Banner = () => {
  return (
    <div className="banner">
      <div className="background-image" style={{ backgroundImage: `url(${bannerImage})` }}></div>
      <div className="background-tint"></div>
      <h1>FIND RELIABLE HANDYMAN SERVICES IN YOUR AREA TODAY!</h1>
      <h1 className="banner-title">California Premium Handyman & Repair Services</h1>
      <p className="banner-description">Leading supplier of first-rate home improvement services in Los Angeles. We offer a wide range of services, including major and minor plumbing repairs, installations and replacements, flooring installation, furniture assembly, as well as projects of a smaller scale – any types of odd jobs around the house.</p>
      <div className="location-icons">
        <div>
        <img src={process.env.PUBLIC_URL + '/mapIcon.png'} alt="San Francisco" />
          <div>San Francisco Bay Area</div>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + '/mapIcon.png'} alt="Los Angeles" />
          <div>Los Angeles</div>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + '/mapIcon.png'} alt="Los Angeles" />
          <div>San Diego</div>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + '/mapIcon.png'} alt="Los Angeles" />
          <div>Santa Clarita</div>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + '/mapIcon.png'} alt="Los Angeles" />
          <div className="location-text">Los Angeles</div>
        </div>
      </div>
      <div className="services-grid">
        <div className="service-box">
          <img className='service-icon' src={process.env.PUBLIC_URL + '/carpentry.png'} alt="Carpentry" />
          <div className="service-name">Carpentry</div>
        </div>
        <div className="service-box">
          <img src={process.env.PUBLIC_URL + '/carpentry.png'} alt="Drywall / Walls" />
          <div className="service-name">Drywall / Walls</div>
        </div>
        <div className="service-box">
          <img src={process.env.PUBLIC_URL + '/carpentry.png'} alt="General Contracting" />
          <div className="service-name">General Contracting</div>
        </div>
        <div className="service-box">
          <img src={process.env.PUBLIC_URL + '/carpentry.png'} alt="Installation" />
          <div className="service-name">Installation</div>
        </div>
        <div className="service-box">
          <img src={process.env.PUBLIC_URL + '/plumbingrepair.jpg'} alt="Plumbing Repair" />
          <div className="service-name">Plumbing Repair</div>
        </div>
      </div>
      <p>At Precision Handyman, we proudly serve the San Francisco Bay Area and Los Angeles with our premium handyman and repair services. Contact us today to schedule an appointment and experience the highest level of professionalism and expertise.</p>
    </div>
  );
}
export default Banner;