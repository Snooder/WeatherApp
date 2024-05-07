# Build app (Builds and Runs app in Docker Desktop)
`docker-compose up --build`


# Debug Component - Server (Expressjs) 
`cd weatherapp/server/`

`docker build -f Dockerfile.dev -t snooder619/weatherapp-server .`

`Docker run -it -p 4003:5000 snooder619/weatherapp-server`

# Debug Component - Client (React)
`cd weatherapp/client/`

`docker build -f Dockerfile.dev -t snooder619/weatherapp-client .`

`Docker run -it -p 4003:5000 snooder619/weatherapp-client`
