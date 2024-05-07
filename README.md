# Build app (Builds and runs app)
docker-compose up --build

# Individual Testing
# Component - Server (Expressjs) 
cd weatherapp/server/
docker build -f Dockerfile.dev -t snooder619/weatherapp-server .
Docker run -it -p 4003:5000 snooder619/weatherapp-server

# Component - Client (React)
cd weatherapp/client/
docker build -f Dockerfile.dev -t snooder619/weatherapp-client .
Docker run -it -p 4003:5000 snooder619/weatherapp-client
