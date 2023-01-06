import axios from "axios";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import gazeboImage from "../images/gazebo.jpg";
import toiletImage from "../images/toilet.jpg";
import "./YelpReviews.css";

const API_KEY =
	"VFNeWUIUzYwBcqyaTpDsG2LgaxwH-S-N0-uqVADDb4GuDdiOFbFNSDZK1n3pQ31jhjVV6ZJ85oPpLFQPPk7EUI106rJv1YeE61FQhPsGneVvMG9NXAjoKsuX07azY3Yx";

// const business_id = "reliable-plumbing-and-furniture-assembly-rosemead";
const business_id = "reliable-plumbing-and-furniture-assembler-san-fernando-valley-5";

// const retrieveReviews = async (businessId) => {
// 	console.log("hello");
// 	const reviewsResponse = await axios
// 		.get(
// 			// `https://api.yelp.com/v3/businesses/${business_id}/reviews`,
// 			// "https://cors-proxy.htmldriven.com/"
// 			`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${business_id}/reviews`,
// 			{
// 				headers: {
// 					Authorization: `Bearer ${API_KEY}}`,
// 				},
// 			}
// 		)
// 		.then((response) => {
// 			console.log("reviewsResponse:", reviewsResponse);
// 		});

// 	console.log("reviewsResponse:", reviewsResponse);

// 	return reviewsResponse.data.reviews;
// };

function ReviewsCarousel() {
	// const [reviews, setReviews] = React.useState([]);

	// React.useEffect(() => {
	// 	const fetchData = async () => {
	// 		const reviews = await retrieveReviews({ business_id });
	// 		setReviews(reviews);
	// 		console.log("reviews: ", reviews);
	// 	};
	// 	fetchData();
	// }, []);

	return (
		// <Carousel>
		// 	{reviews.map((review) => (
		// 		<div key={review.id}>
		// 			<h3>{review.rating}</h3>
		// 			<p>{review.text}</p>
		// 		</div>
		// 	))}
		// </Carousel>
		// <Carousel>
		// 	<Carousel.item>
		// 		<div>Test</div>
		// 	</Carousel.item>
		// 	<Carousel.item>
		// 		<div>Test 2</div>
		// 	</Carousel.item>
		// </Carousel>
		<div className="yelp_reviews_container">
			<Carousel>
				<Carousel.Item>
					<img className="carousel_img_1" src={gazeboImage} alt="First slide" />
				</Carousel.Item>
				<Carousel.Item>
					<img className="carousel_img_2" src={toiletImage} alt="Second slide" />
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default ReviewsCarousel;
