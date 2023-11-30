# Specify the base image 
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Expose the necessary port
EXPOSE 3000

# Specify the startup command
CMD ["npm", "run", "start"]

