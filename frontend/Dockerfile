FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install
RUN npm install -g @angular/cli@17.0.3

# Bundle app source
COPY . .

# Start the server using the production build
CMD [ "ng", "serve" ]
