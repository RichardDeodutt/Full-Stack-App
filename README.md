# Full-Stack-App
Actual Full-Stack-App, React frontend and Python backend and MySQL database. Using docker!

May need the ubuntu package libmysqlclient-dev if not using the containers

Was tested on a c5.xlarge but it isn't free tier. May run on lower. 

# Notes

- This database is mysql running on a container port 3306, not reachable on the host machine. 

- To manage the database is adminer running on a container port 8080, not reachable on the host machine. 

- The backend is run with Gunicorn on a container port 8000, not reachable on the host machine. 

- The frontend is run with npx on a container port 3000, not reachable on the host machine. 

- I have 3 Nginx containers for adminer, the backend and the frontend. They use the docker network web to reach the other containers without mapping. 

- The adminer Nginx is running on port 80 maps to the host machine on port 8080 to make the app reachable on the internet. 

- The backend Nginx is running on port 80 maps to the host machine on port 5000 to make the app reachable on the internet. 

- The frontend Nginx is running on port 80 maps to the host machine on port 80 to make the app reachable on the internet. 

- I used 3 Nginx containers because I could not make it run 3 proxy servers in the config. 

## Install Docker

```
curl -fsSL https://get.docker.com -o get-docker.sh
```

```
sudo sh get-docker.sh
```

## Get this Repo

```
git clone https://github.com/RichardDeodutt/Full-Stack-App.git
```

```
cd Full-Stack-App
```

## Docker compose Build

```
sudo docker compose up --build
```

When the cypress test is done press Ctrl + C to quit

# One Liner which runs in the background

```
curl -fsSL https://get.docker.com -o get-docker.sh && sudo sh get-docker.sh && git clone https://github.com/RichardDeodutt/Full-Stack-App.git && cd Full-Stack-App && git pull && sudo docker compose up --build -d
```

# Take down running containers from compose

```
sudo docker compose down
```

# Rerun in the background

```
git pull && sudo docker compose down && sudo docker compose up --build -d
```

# Diagram

<p align="center">
<a href="https://github.com/RichardDeodutt/Full-Stack-App/blob/main/images/Full-Stack-App.drawio.png"><img src="https://github.com/RichardDeodutt/Full-Stack-App/blob/main/images/Full-Stack-App.drawio.png" />
</p>