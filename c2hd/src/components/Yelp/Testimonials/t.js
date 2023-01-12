import React, { useEffect, useState } from "react";
import TestiMonialsDetails from "../TD/testimonialdetails.js";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import userPic from '../../image/user-one.png';
import "./t.css";
// import yelp from "/yelp.json";

const Testimonials = () => {
	const testiMonials = [
		{
			name: "Pradeep P.",
			description:
				"Had a plumbing issue with our garbage disposal,\nPut up a project in yelp, Rick replied immediately and asked for more details and did a online consultation and explained the possible scenarios that could cause and different things he need to fix it and gave a quote for each effort and accommodated us on Priority and came on promised time and fixed the issue. Very reliable/punctual/ trust worthy. Look no further if you are in a plumbing need. Excellent and highly recommended",
			address: "Irvine, CA",
			img: "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png",
		},
		{
			name: "Michael W.",
			description:
				"Finding someone to work with was a real challenge for the work I needed to be done.  Ten-plus calls later, I found these gentlemen.  He is straightforward, honest, and a great communicator. We were able to give him enough information so that he could give an estimate for the job. No one else could provide an estimate without dispatching, for a fee, and then they would give an estimate. For complex jobs, I agree that dispatching would be necessary, but this work wasn't complex, and I probably could have gone to a Home improvement store for putty and tape and done it myself. \n\nI'm keeping this provider's number handy for anything else I might need. Finding someone you feel you can trust is more complicated than it should be these days. This guy rocks!",
			address: "Granada Hills, CA",
			img: "https://s3-media0.fl.yelpcdn.com/photo/QennjxTYvjkJBPBpA3eJiQ/180s.jpg",
		},
		{
			name: "Thong P.",
			description:
				"These are way better then the gazebos I saw at home depot and big lots. I was worried it would her flimsy but after speaking with then for over a week and the installation, we are happy with the new addition. ",
			address: "Anaheim, CA ",
			img: "https://s3-media0.fl.yelpcdn.com/photo/ky1gFZZD_P2dTz5vINeKgg/180s.jpg",
		},
		{
			name: "John B.",
			description:
				"Thoroughly appreciate Ricks responsiveness and professionalism responding to my inquiry. Offered a fair price for artificial hedge assembly and arrived on time with all necessary tools to get the job done. Will be sending him another request this week! Family owned and operated, I strongly recommend supporting Reliable Furniture.",
			address: "Los Angeles, CA",
			img: "https://s3-media0.fl.yelpcdn.com/photo/PZmgD4KgspX-mH2BW3e6sQ/180s.jpg",
		},
		{
			name: "Tommy L.",
			description:
				"I was very pleased with my experience. Rick was very helpful and knew what he was doing. He was very thoughtful and careful while he helped me mount my TV to the wall. I will definitely contact him again for help and would highly recommend him to anyone in the area who needs help",
			address: "Rosemead, CA",
			img: "https://s3-media0.fl.yelpcdn.com/photo/pMKDSYZtDBw_22jAw_hGeQ/180s.jpg",
		},
		{
			name: "Reyan E.",
			description:
				"Rick and his partner were very efficient and very reasonably priced. They fixed multiple plumbing issues and my water heater . I highly recommend this company. I will be using them again in the future. Thank you Rick for your quick response and great work on my home. As a single mom I appreciate your honest estimates.",
			address: "Irvine, CA",
			img: "https://s3-media0.fl.yelpcdn.com/photo/SKsoPBNV4KorWvRqpUThSg/180s.jpg",
		},
		{
			name: "Seven H.",
			description:
				"Very professional, friendly and I was definitely impressed with the work they have done, Let the Games Begin lol Thank you Guys",
			address: "San Francisco, CA",
			img: "https://s3-media0.fl.yelpcdn.com/photo/51mC4JZG-bk5GeXnphmTxA/180s.jpg",
		},
		{
			name: "Rusty L.",
			description:
				"I have had Reliable come assemble multiple furnitures, large gym set, couches, & tables. These guys are awesome. Professional, bring own tools, and trust them to come to house while I was at work. They worked their butt off multiple days. Highly recommend.",
			address: "Mission Viejo, CA",
			img: "https://s3-media0.fl.yelpcdn.com/photo/1EXT8-uihdTlU_E3DEzuTA/180s.jpg",
		},
		{
			name: "Susie P.",
			description:
				"Accelerant work. On time. Friendly. Reasonable fee. Highly recommend to LA people. Quick response.",
			address: "Pasadena, CA",
			img: "https://s3-media0.fl.yelpcdn.com/photo/GLhdDFVbBqBnHtmA0weX6Q/180s.jpg",
		},
	];

	//Owl Carousel Settings
	const options = {
		loop: true,
		center: true,
		items: 3,
		margin: 0,
		autoplay: true,
		dots: false,
		autoplayTimeout: 8500,
		smartSpeed: 450,
		nav: false,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 3,
			},
			1000: {
				items: 3,
			},
		},
	};
	/*
	TODO: Fix carousel items overlapping into footer.
	*/
	return (
		<section id="testimonial" className="testimonials">
			<div className="container mt-5">
				<div className="text-center ">
					<h3 className="sectionTitle">What Our Clients are Saying?</h3>
				</div>
				<p className="text-center ">
					They love our assembly and plumbing services on Yelp, and you will too!
				</p>
				<div className="row">
					<div className="col-md-12">
						<OwlCarousel
							id="customer-testimonoals"
							className="owl-carousel owl-theme"
							{...options}
						>
							{testiMonials.length === 0 ? (
								<div className="item">
									<div className="shadow-effect">
										{/* <img className="img-circle" src={userPic} /> */}

										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore
											magna.
										</p>
									</div>
									<div className="testimonial-name">
										<h5>Rajon Rony</h5>
										<small>ITALY</small>
									</div>
								</div>
							) : (
								testiMonials.map((testiMonialDetail) => {
									return (
										<TestiMonialsDetails
											testiMonialDetail={testiMonialDetail}
											key={testiMonialDetail.name}
										/>
									);
								})
							)}
						</OwlCarousel>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
