import "./contact.scss";
import { useEffect, useState } from "react";
import { useRef } from "react";
import AnimatedLetters from "../AnimatedLetters";
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

/*
! Contact form is not displaying properly
*/

const Contact = () => {
	const [letterClass, setLetterClass] = useState("text-animate");
	const refForm = useRef();

	useEffect(() => {
		setTimeout(() => {
			setLetterClass("text-animate-hover");
		}, 3000);
	}, []);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_4cyu5la", "template_l9hqavd", refForm.current, "rpEQhNz3KE61d2-ZE")
			.then(
				() => {
					alert("Message successfully sent!");
					window.location.reload(false);
				},
				() => {
					alert("Failed to send the message, please try again");
				}
			);
	};

	return (
		<>
			<div className="container contact-page">
				<div className="text-zone">
					<h1>
						<AnimatedLetters
							letterClass={letterClass}
							strArray={[
								"C",
								"o",
								"n",
								"t",
								"a",
								"c",
								"t",
								" ",
								"M",
								"e",
								", ",
								" ",
								"R",
								"i",
								"c",
								"k",
								" ",
								"S",
								"z",
								"e",
								"t",
								"o",
							]}
							idx={15}
						/>
					</h1>

					<p>
						Are you in need of a professional for your plumbing or furniture assembly
						needs? Look no further! Contact me for all of your installation, repair, and
						maintenance needs. I am reliable, efficient, and always happy to answer any
						questions you may have. Don't hesitate to reach out for a quote or
						consultation today.
					</p>
					<div className="contact-form">
						<form ref={refForm} onSubmit={sendEmail}>
							<ul>
								<li className="half">
									<input type="text" name="name" placeholder="Name" required />
								</li>
								<li className="half">
									<input type="email" name="email" placeholder="email" required />
								</li>
								<li>
									<input
										placeholder="Subject"
										type="text"
										name="Subject"
										required
									/>
								</li>
								<li>
									<textarea
										placeholder="Message"
										name="message"
										required
									></textarea>
								</li>
								<li>
									<input type="submit" className="flat-button" value="SEND" />
								</li>
							</ul>
						</form>
					</div>
				</div>

				<div className="map-wrap">
					<MapContainer center={[34.0392359, -118.2662891]} zoom={11}>
						<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}cd ../{y}.png" />
						<Marker position={[34.0392359, -118.2662891]}></Marker>
					</MapContainer>
				</div>
			</div>
		</>
	);
};

export default Contact;
