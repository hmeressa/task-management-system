# Use a Docker image that includes Docker Compose
FROM render:latest

# Set the working directory
WORKDIR /app

# Copy the docker-compose.yml file
COPY docker-compose.yml /app/docker-compose.yml

# Run Docker Compose
CMD ["docker-compose", "up"]
