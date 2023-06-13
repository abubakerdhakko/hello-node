# Base image
FROM node:18

# Set the working directory in the container
WORKDIR /src

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining source code to the working directory
COPY . .

# Expose the port your Node.js app is listening on
EXPOSE 3000

# Command to start the Node.js app
CMD ["node", "index.js"]
