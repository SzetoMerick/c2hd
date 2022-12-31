import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./components/HomePage.js";
import Button from "./components/Button";
import React, { useState, useEffect } from "react";

function App() {
	return (
		<BrowserRouter>
			<Nav />
			<HomePage />
			<div className="container">
				<Routes>{/* <Route path="/" element={<HomePage />} /> */}</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
