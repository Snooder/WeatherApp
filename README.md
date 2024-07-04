# WeatherApp
[Tomorrow.io Weather API](https://docs.tomorrow.io/reference/weather-forecast) to look up and render basic weather data per zipcode. 

Zipcodes are 
- saved in Postgres DB
- fetched via `weatherapp/server/`
- rendered as an interactable list via React `weatherapp/client/`.

![chrome-capture-2024-7-4](https://github.com/Snooder/WeatherApp/assets/6718356/e21d03e2-92f1-40a4-976f-3f893f750188)


# Instructions (Builds and Runs app in Docker Desktop)
`docker-compose up --build`

# Removes Docker images
`docker-compose down -V`

# Debug Instructions - Server (Expressjs) 
`cd weatherapp/server/`

`docker build -f Dockerfile.dev -t snooder619/weatherapp-server .`

`Docker run -it -p 4003:5000 snooder619/weatherapp-server`

# Debug Instructions - Client (React)
`cd weatherapp/client/`

`docker build -f Dockerfile.dev -t snooder619/weatherapp-client .`

`Docker run -it -p 4003:5000 snooder619/weatherapp-client`

# Debug Instructions - Postgres
See docker-compose.yml - Postgres service
