# Select a base image
FROM node:alpine

# Run some commands and configurations
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080

# Set startup commands
CMD [ "npm", "start" ]
