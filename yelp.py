import requests
from bs4 import BeautifulSoup

url = "https://www.yelp.com/biz/reliable-plumbing-and-furniture-assembler-san-fernando-valley-5"

# Make a request to the website
response = requests.get(url)

# Parse the HTML content
soup = BeautifulSoup(response.content, 'html.parser')

# Find all of the review divs with a class of "review"
review_divs = soup.find_all('div', class_='review')

# Iterate over the review divs
for review_div in review_divs:
  # Find the rating span within the review div
  rating_span = review_div.find('span', class_='rating-large')
  # Get the rating from the span
  rating = int(rating_span.text[0])

  # If the rating is 5 stars, print the review
  if rating == 5:
    review_p = review_div.find('p', class_='review_comment')
    print(review_p.text)