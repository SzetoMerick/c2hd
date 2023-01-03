import "./HomePage.css";
// import React from "react";
import Button from "@mui/material/Button";
import React, { useState, useEffect } from "react";
import bballCourtImage from "../images/basketball-court.jpg";
import toiletImage from "../images/toilet.jpg";
import gazeboImage from "../images/gazebo.jpg";

function HomePage() {
  const [image, setImage] = useState(bballCourtImage);
  const [description, setDescription] = useState("");

  return (
    <div className="homepage_container">
      <div className="img_container">
        <img className="homepage_img" src={image} alt="Image" />
      </div>
      <div className="image_button_container">
        <li>
          <Button
            className="bball_button"
            variant="contained"
            onClick={() => {
              setImage(bballCourtImage);
              setDescription("Basketball Court Installation");
            }}
          >
            Basketball Court Installation
          </Button>
        </li>
        <li>
          <Button
            className="toilet_button"
            variant="contained"
            onClick={() => {
              setImage(toiletImage);
              setDescription("Toilet Replacement");
            }}
          >
            Toilet Replacement
          </Button>
        </li>
        <li>
          <Button
            className="gazebo_button"
            variant="contained"
            onClick={() => {
              setImage(gazeboImage);
              setDescription("Gazebo Installation");
            }}
          >
            Gazebo Installation
          </Button>
        </li>
      </div>
      {description ? (
        <div className="description_container">{description}</div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default HomePage;
