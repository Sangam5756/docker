---

# 🚀 Microservices with Docker — From Zero to Hero

## 📖 Table of Contents
1. [What is Docker?](#what-is-docker-)
2. [Why Use Docker?](#-why-use-docker)
3. [Without Docker vs With Docker](#-without-docker-vs-with-docker)
4. [Project Overview](#-project-overview)
5. [Project Structure](#-project-structure)
6. [Installation & Setup](#-installation--setup)
7. [Building and Running Services Individually](#-building-and-running-services-individually)
8. [Using Docker Compose](#-using-docker-compose)
9. [Docker Commands Cheat Sheet](#-docker-commands-cheat-sheet)
10. [Learning Resources](#-learning-resources)

---

##  What is Docker 🐳 ?

Docker is like a **magic lunchbox** for software.
Normally, if you move your app to another computer, you have to make sure all the tools, libraries, and settings are installed again.
With Docker, you **package everything** your app needs — code, dependencies, and system tools — into a neat, portable box called a **container**.
That way, it **runs anywhere** without the “it works on my machine” problem.

---

## 💡 Why Use Docker?

* **No more setup nightmares** — just `docker run` and go.
* **Consistency** — the same environment everywhere (dev, test, prod).
* **Easy sharing** — send your Docker image to anyone, they can run it instantly.
* **Microservices friendly** — run multiple small apps together without conflicts.
* **Lightweight** — uses fewer resources than full virtual machines.

---

## ⚖ Without Docker vs With Docker

| Without Docker                                    | With Docker                              |
| ------------------------------------------------- | ---------------------------------------- |
| Need to install Node.js, npm, databases manually  | Comes pre-installed inside the container |
| Works on your PC, but maybe not on someone else’s | Works exactly the same on all machines   |
| Updating environment is painful                   | Just rebuild the image                   |
| Conflicts between apps                            | Each app runs in its own container       |
| Setup takes hours                                 | Setup takes minutes                      |

---

## 🗂 Project Overview

This project contains **three microservices** (`service1`, `service2`, `service3`) that run in separate Docker containers but can communicate over a shared Docker network.

You can:

* Build and run each service individually
* Or run all services together with Docker Compose

---

## 📂 Project Structure

```
.
├── service1/
│   ├── Dockerfile
│   ├── package.json
│   └── ...
├── service2/
│   ├── Dockerfile
│   ├── package.json
│   └── ...
├── service3/
│   ├── Dockerfile
│   ├── package.json
│   └── ...
└── docker-compose.yml
```

---

## ⚙ Installation & Setup

### 1️⃣ Install Docker

* [Docker Desktop](https://www.docker.com/products/docker-desktop/) for Windows/Mac
* `sudo apt install docker.io` for Linux

Verify installation:

```bash
docker --version
```

---

## 🏗 Building and Running Services Individually

### Build Images

```bash
# Build each service image
docker build -t service1 ./service1
docker build -t service2 ./service2
docker build -t service3 ./service3
```

### Run Containers

```bash
# Run service1
docker run -d -it --init --name service1 \
  --network microservice-network \
  -p 3001:3000 \
  -v "$(pwd)/service1":/developer/service1 \
  service1:latest

# Run service2
docker run -d -it --init --name service2 \
  --network microservice-network \
  -p 3002:3000 \
  -v "$(pwd)/service2":/developer/service2 \
  service2:latest

# Run service3
docker run -d -it --init --name service3 \
  --network microservice-network \
  -p 3003:3000 \
  -v "$(pwd)/service3":/developer/service3 \
  service3:latest
```

---

## 📦 Using Docker Compose

Instead of running each service manually, use **Docker Compose**:

**docker-compose.yml**

```yaml
version: '3.8'

services:
  service1:
    build: ./service1
    image: service1:latest
    ports:
      - 3000:3000

  service2:
    build: ./service2
    image: service2:latest
    ports:
      - 3001:3000

  service3:
    build: ./service3
    image: service3:latest
    ports:
      - 3002:3000
```

Run all services:

```bash
docker-compose up --build
```

Stop all services:

```bash
docker-compose down
```

---

## 📜 Example Dockerfile

**service1/Dockerfile**

```dockerfile
FROM node:18

WORKDIR /app/service1

COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
```

---

## 🛠 Docker Commands Cheat Sheet

| Command                             | Description             |
| ----------------------------------- | ----------------------- |
| `docker ps`                         | List running containers |
| `docker ps -a`                      | List all containers     |
| `docker build -t name .`            | Build image             |
| `docker run -p host:container name` | Run container           |
| `docker exec -it container bash`    | Enter container shell   |
| `docker stop container`             | Stop container          |
| `docker rm container`               | Remove container        |
| `docker rmi image`                  | Remove image            |
| `docker-compose up`                 | Start services          |
| `docker-compose down`               | Stop services           |

---

## 📚 Learning Resources

* [Docker Official Docs](https://docs.docker.com/)
* [Play with Docker](https://labs.play-with-docker.com/)
* [Docker for Beginners YouTube Playlist](https://www.youtube.com/results?search_query=docker+for+beginners)


If you want, I can also **add a simple diagram** showing how these three services connect inside Docker — that would make it even more beginner-friendly.
Do you want me to include that visual?
