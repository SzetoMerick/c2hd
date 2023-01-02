import "./HomePage.css";
// import React from "react";
import Button from "@mui/material/Button";
// import { makeStyles } from "@mui/material/styles";
import { ThemeProvider, createTheme } from "@mui/system";
import React, { useState, useEffect } from "react";
import bballCourtImage from "../images/basketball-court.jpg";
import toiletImage from "../images/toilet.jpg";
import gazeboImage from "../images/gazebo.jpg";

function HomePage() {
	const [image, setImage] = useState(bballCourtImage);

	return (
		// <ThemeProvider theme={theme}>
		<div className="homepage_container">
			<div className="img_container">
				<img className="homepage_img" src={image} alt="Image" />
			</div>
			<div className="image_button_container">
				<li>
					<Button
						// sx={{
						// 	color: "black.primary",
						// }}
						className="bball_button"
						variant="contained"
						onClick={() => setImage(bballCourtImage)}
					>
						Basketball Court Installation
					</Button>
				</li>
				<li>
					<Button
						className="toilet_button"
						variant="contained"
						onClick={() => setImage(toiletImage)}
					>
						Toilet Replacement
					</Button>
				</li>
				<li>
					<Button
						className="gazebo_button"
						variant="contained"
						onClick={() => setImage(gazeboImage)}
					>
						Gazebo Installation
					</Button>
				</li>
			</div>
		</div>
		// </ThemeProvider>
	);
}

export default HomePage;
