FROM node:boron

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY ./app/package.json /app/
RUN npm install

# Bundle app source
COPY ./app /app

EXPOSE 3000
CMD [ "npm", "start" ]