import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./components/HomePage.js";
<<<<<<< HEAD
import Contact from "./components/ContactForm/contact";
import Footer from "./components/FooterMenu/Footer.js";
import YelpReviews from "./components/YelpReviews.js";
import TestiMonials from "./components/Yelp/Testimonials/t.js"
=======
import Contact from "./components/contact";
import Footer from "./components/Footer.js";
import YelpReviews from "./components/YelpReviews.js";
>>>>>>> main

function App() {
	return (
		<BrowserRouter>
			<Nav />
			<YelpReviews />
			<HomePage />
<<<<<<< HEAD
			<Contact />
			<TestiMonials />


			<div className="container">
				<Routes>
					<Route path="/contact" element={<Contact />} />
					<Route path="/testimonials" element={<TestiMonials />} />
				</Routes>
			</div>
=======
			{/* <div className="container">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</div> */}
>>>>>>> main
			<Footer />
		</BrowserRouter>
	);
}

export default App;
