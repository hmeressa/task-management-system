# Use an official Node.js runtime as a parent image
FROM node:20.9-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json ./

# Install the application dependencies
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

# Expose the port that the app runs on
EXPOSE 8000

# Define the command to run your application
CMD ["npm", "run", "start"]


# FROM node as builder

# WORKDIR /app

# COPY package*.json ./

# RUN npm install 

# COPY . .

# RUN npm run build

# FROM nginx

# COPY nginx.conf /etc/nginx/conf.d/default.conf

# COPY --from=builder /app/dist /usr/share/nginx/html
