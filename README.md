# A simple MERN stack application 

- for notion files go to [Link to Notion files](https://github.com/theinfinox/courseApp/tree/docs)

### Create a network for the docker containers

`docker network create mern_network`

### Build the client 

```sh
cd ./frontend
docker build -t mern-frontend .
```

### Run the client

`docker run --name=frontend --network=mern_network -d -p 5173:5173 mern-frontend`

### Verify the client is running

Open your browser and type `http://localhost:5173`

### Run the mongodb container

`docker run --network=mern_network --name mongodb -d -p 27017:27017 -v ~/opt/data:/data/db mongo:latest`

### Build the server

```sh
cd ./backend
docker build -t mern-backend .
```

### Run the server

`docker run --name=backend --network=mern_network -d -p 5050:5050 mern-backend`

## Using Docker Compose

`docker compose up -d`

