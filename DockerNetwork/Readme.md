# Build each image separately
docker build -t service1 ./service1
docker build -t service2 ./service2
docker build -t service3 ./service3

# Run service1 
docker run -d it --init --name service1 --network microservice-network -p 3001:3000 -v "$(pwd)/service1":/developer/service1 service1:latest

# Run service2 
docker run -d it --init --name service2 --network microservice-network -p 3002:3000 -v "$(pwd)":/developer/service2 service2:latest

# Run service3 
docker run -d it --init --name service3 --network microservice-network -p 3003:3000 -v "$(pwd)/service3":/developer/service3 service3:latest
