import axios from "axios";
import React from "react";
import Carousel from "react-bootstrap/Carousel";

const API_KEY =
	"VFNeWUIUzYwBcqyaTpDsG2LgaxwH-S-N0-uqVADDb4GuDdiOFbFNSDZK1n3pQ31jhjVV6ZJ85oPpLFQPPk7EUI106rJv1YeE61FQhPsGneVvMG9NXAjoKsuX07azY3Yx";

const business_id = "reliable-plumbing-and-furniture-assembly-rosemead";

const retrieveReviews = async (businessId) => {
	const reviewsResponse = await axios.get(
		`https://api.yelp.com/v3/businesses/${business_id}/reviews`,
		{
			headers: {
				Authorization: `Bearer ${API_KEY}}`,
			},
		}
	);

	return reviewsResponse.data.reviews;
};

function ReviewsCarousel() {
	const [reviews, setReviews] = React.useState([]);

	React.useEffect(() => {
		const fetchData = async () => {
			const reviews = await retrieveReviews({ business_id });
			setReviews(reviews);
			console.log("reviews: ", reviews);
		};
		fetchData();
	}, []);

	return (
		<Carousel>
			{reviews.map((review) => (
				<div key={review.id}>
					<h3>{review.rating}</h3>
					<p>{review.text}</p>
				</div>
			))}
		</Carousel>
	);
}

export default ReviewsCarousel;
