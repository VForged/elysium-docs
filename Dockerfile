FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm ci --only=production && npm cache clean --force

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run clear
RUN npm run build
EXPOSE 3000

CMD ["npm", "run", "serve"]
