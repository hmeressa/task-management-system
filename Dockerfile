# Use a Docker image that includes Docker Compose
FROM docker/compose:latest

#Working dir
WORKDIR /app

# Copy the docker-compose.yml file
COPY docker-compose.yml ./

# Run Docker Compose
CMD ["docker-compose", "up"]
