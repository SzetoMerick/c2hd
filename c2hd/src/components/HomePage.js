import "./HomePage.css";
// import React from "react";
import Button from "./Button.js";
import React, { useState, useEffect } from "react";
import bballCourtImage from "../images/basketball-court.jpg";

function HomePage() {
	return (
		<div className="homepage-container">
			<img className="bballCourtImg" src={bballCourtImage} alt="bballCourt" />
		</div>
	);
}

export default HomePage;
