# node-urlShortener
`node-urlShortener` is a URL Shortener Microservice that ensures you get the right messages out to your audience without taking up too much space in your social posts. 

## Motivation
`node-urlShortener` ensures you get the right messages out to your audience without taking up too much space in your social posts. 

## Usage

## ⚙️ Installation

- Open CMD
  
- Change directory to desktop

  `cd desktop`
   
- Clone this repository

  `git clone git@github.com:backendkolawole/node-urlShortener.git`

- Change the current directory

  `cd node-urlShortener`
  
- Install packages
  
  `npm install`

- Create a .env file in the root directory

  - Set up the `MONGO_URI` variable equal to the DB connection string
  - Set up the `PORT` variable

> [!IMPORTANT]
> To avoid port collisions, in the source code, the port value is `3000`

- Run the server

  `npm start`


## Endpoints

**POST [base url]/api/shorturl**

Enter information in the x-www-form-urlencoded of the API, e.g.:

![Screenshot of a how-to enter information in the x-www-form-urlencoded of the API on Postman.](https://github.com/backendkolawole/node-urlShortener/assets/102606432/509e7976-baab-4b28-9ab1-8dc452d8d084)

You get a JSON response with original_url and short_url properties. 

```
200 (OK)
{
    "original_url": "http://www.example.com",
    "short_url": "65cb41ce9858834b8e119b59"
}
```


**GET [base url]/api/shorturl/<short_url>**

Example:

![Screenshot of a how-to enter information in the x-www-form-urlencoded of the API on Postman.](https://github.com/backendkolawole/node-urlShortener/assets/102606432/85bf3335-160d-468f-831b-536a8d51f13c)

You will be redirected to the original URL.

If you pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain 

```
404 (Not Found)
{
  error: 'invalid url' 
}
```
