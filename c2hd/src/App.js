import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./components/HomePage.js";
import Contact from "./components/ContactForm/contact";
import Footer from "./components/FooterMenu/Footer.js";
import YelpReviews from "./components/YelpReviews.js";
import TestiMonials from "./components/Yelp/Testimonials/t.js"
import Header from "./components/Owners/owners.jsx"

function App() {
	return (
		<BrowserRouter>
			<Nav />
			{/* <YelpReviews /> */}
			<HomePage />
			<Contact />
			<TestiMonials />
			<Header/>


			<div className="container">
				<Routes>
					<Route path="/contact" element={<Contact />} />
					<Route path="/testimonials" element={<TestiMonials />} />
					<Route path="/owners" element={<Header />} />
				</Routes>
			</div>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
