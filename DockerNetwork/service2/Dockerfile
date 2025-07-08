FROM node


WORKDIR /app/service2


COPY . package.json

RUN npm install

COPY . .


CMD ["node","index.js"]

