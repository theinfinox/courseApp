# A simple MERN stack application .

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

### Build the server

```sh
cd ./backend
docker build -t mern-backend .
```
| USE NEEDFUL .env FILE
### Run the server

`docker run --name=backend --network=mern_network -d -p 4000:4000 mern-backend`


