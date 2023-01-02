import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaIoxhost } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-container">
				<div className="footer-column">
					<h3>About Us</h3>
					<p>Learn more about our company and mission.</p>
					<Link to="/about">About Us</Link>
				</div>
				<div className="footer-column">
					<h3>Support</h3>
					<p>Get help with any issues you may be experiencing.</p>
					<Link to="/support">Support</Link>
				</div>
				<div className="footer-column">
					<h3>Contact</h3>
					<p>Get in touch with us.</p>
					<Link to="/contact">Contact</Link>
				</div>
				<div className="footer-column">
					<h3>Follow Us</h3>
					<p>Stay up to date with our latest news and updates.</p>
					<div className="social-media-links">
						<a href="#">
							<FaFacebook />
						</a>
						<a href="#">
							<FaTwitter />
						</a>
						<a href="#">
							<FaInstagram />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
