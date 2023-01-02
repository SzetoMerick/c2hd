import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./components/HomePage.js";
import Footer from "./components/Footer.js";

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
