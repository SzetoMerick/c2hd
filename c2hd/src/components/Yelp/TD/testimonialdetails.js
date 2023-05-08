import React, { useState } from 'react';

const TestiMonialsDetails = ({ testiMonialDetail }) => {
  const { name, address, description, img } = testiMonialDetail;

  // Add a new state to manage the read more button
  const [expanded, setExpanded] = useState(false);

  // Function to toggle the description state
  const handleReadMore = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="item">
      <div className="shadow-effect">
        <img className="img-circle" src={img} alt={name} />
        <p style={{ maxHeight: expanded ? 'none' : '4.5em', overflow: 'hidden' }}>
          {description}
        </p>
        {/* Add the read more button */}
        <button className="read-more" onClick={handleReadMore}>
          {expanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
      <div className="testimonial-name">
        <h5>{name}</h5>
        <small>{address}</small>
      </div>
    </div>
  );
};

export default TestiMonialsDetails;