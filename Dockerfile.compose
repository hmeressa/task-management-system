# Use a Docker image that includes Docker Compose
FROM render/dev:latest

# Copy the docker-compose.yml file
COPY docker-compose.yml /app/docker-compose.yml

# Set the working directory
WORKDIR /app

# Run Docker Compose
CMD ["docker-compose", "up"]
