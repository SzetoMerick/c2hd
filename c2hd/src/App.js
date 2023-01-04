import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./components/HomePage.js";
import Contact from "./components/contact";
import Footer from "./components/Footer.js";
import YelpReviews from "./components/YelpReviews.js";

function App() {
	return (
		<BrowserRouter>
			<Nav />
			<YelpReviews />
			<HomePage />
			{/* <div className="container">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</div> */}
			<Footer />
		</BrowserRouter>
	);
}

export default App;
