# Use a Docker image that includes Docker Compose
FROM docker/compose:latest

# Copy the docker-compose.yml file to the root directory
# COPY docker-compose.yml /app/task-management-system/docker-compose.yml

# Set the working directory
WORKDIR /app

EXPOSE 5000

# Run Docker Compose
CMD ["docker-compose", "up"]
