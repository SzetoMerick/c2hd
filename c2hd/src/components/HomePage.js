import "./HomePage.css";
// import React from "react";
import Button from "@mui/material/Button";
// import { makeStyles } from "@mui/material/styles";
import { ThemeProvider, createTheme } from "@mui/system";
import React, { useState, useEffect } from "react";
import bballCourtImage from "../images/basketball-court.jpg";
import toiletImage from "../images/toilet.jpg";
import gazeboImage from "../images/gazebo.jpg";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import RoofingIcon from "@mui/icons-material/Roofing";
import WcIcon from "@mui/icons-material/Wc";

function HomePage() {
	const [image, setImage] = useState(bballCourtImage);
	const [description, setDescription] = useState("");

	return (
		<div className="homepage_container">
			<div className="img_container">
				<img className="homepage_img" src={image} />
			</div>
			<div className="image_button_container">
				<li>
					<Button
						onMouseOver={() => {
							setImage(bballCourtImage);
							setDescription("Basketball Court Installation");
						}}
						className="bball_button"
						variant="contained"
						startIcon={<SportsBasketballIcon />}
						endIcon={<SportsBasketballIcon />}
						// onClick={() => {
						// 	setImage(bballCourtImage);
						// 	setDescription("Basketball Court Installation");
						// }}
					>
						Basketball Court Installation
					</Button>
				</li>
				<li>
					<Button
						onMouseOver={() => {
							setImage(toiletImage);
							setDescription("Toilet Replacement");
						}}
						className="toilet_button"
						variant="contained"
						startIcon={<WcIcon />}
						endIcon={<WcIcon />}
						// onClick={() => {
						// 	setImage(toiletImage);
						// 	setDescription("Toilet Replacement");
						// }}
					>
						Toilet Replacement
					</Button>
				</li>
				<li>
					<Button
						onMouseOver={() => {
							setImage(gazeboImage);
							setDescription("Gazebo Installation");
						}}
						className="gazebo_button"
						variant="contained"
						startIcon={<RoofingIcon />}
						endIcon={<RoofingIcon />}
						// onClick={() => {
						// 	setImage(gazeboImage);
						// 	setDescription("Gazebo Installation");
						// }}
					>
						Gazebo Installation
					</Button>
				</li>
			</div>
			<div className="description_container">
				{description ? <div className="description_title">{description}</div> : <div></div>}
			</div>
		</div>
	);
}

export default HomePage;
