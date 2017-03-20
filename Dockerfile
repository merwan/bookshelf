FROM node:boron

# Create app directory
RUN mkdir -p /home/app
WORKDIR /home/app

# Install app dependencies
COPY package.json .
RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]
