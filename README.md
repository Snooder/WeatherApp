# WeatherApp
Uses Tomorrow.io weather API to look up and render basic weather data per zipcode. Zipcodes are saved in Postgres db, fetched via `weatherapp/server/`, and rendered as an interactable list via React `weatherapp/client/`.


# Instructions (Builds and Runs app in Docker Desktop)
`docker-compose up --build`


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
