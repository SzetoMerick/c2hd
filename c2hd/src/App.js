import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./components/HomePage.js";
import Contact from "./components/ContactForm/contact";
import Footer from "./components/FooterMenu/Footer.js";
import YelpReviews from "./components/YelpReviews.js";
import TestiMonials from "./components/Yelp/Testimonials/t.js";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/contact" element={<Contact />} />
				<Route path="/testimonials" element={<TestiMonials />} />
			</Routes>
			<Nav />
			<YelpReviews />
			<HomePage />
			<Contact />
			<TestiMonials />
			<Footer />
		</BrowserRouter>
	);
}

export default App;
