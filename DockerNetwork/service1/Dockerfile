FROM node


WORKDIR /app/service1


COPY ./package.json ./package-lock.json ./



RUN npm install
COPY . .



CMD ["node","index.js"]

