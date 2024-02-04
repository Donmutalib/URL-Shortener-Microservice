# URL-Shortener-Microservice
A URL shortener ensures that you get the right messages out to your audience without taking up too much space in your social posts. 

## Motivation

### Goal

⚙️ Installation
Clone the repo by running git clone git@github.com:backendkolawole/URL-Shortener-Microservice.git in terminal

Create a .env file and set up the PORT variable

run npm install

run npm start


## Other usage examples
Documentation
You can POST a URL to /api/shorturl and get a JSON response with original_url and short_url properties. Here's an example: { original_url : 'https://freeCodeCamp.org', short_url : 1}

When you visit /api/shorturl/<short_url>, you will be redirected to the original URL.

If you pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain { error: 'invalid url' }

## Closing and resources 
## Contact
## Contributing
