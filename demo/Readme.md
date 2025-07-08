<!-- run -->
DOCKER FILE
- FROM imageName

WORKDIR // set the working directory
RUN // run command
COPY // copy files
CMD // start command


docker ps  // check all running containers
docker ps -a  // check all containers including stopped containers

docker -it imageid bash  // enter a container


docker run -p hostport:containerport  imagename  //direct run
docker run -d -p  hostport:containerport  imagename  //detached mode
