# Use a base Docker image that includes Docker Compose
FROM docker/compose:latest

# Copy the docker-compose.yml files from the root directory to the /app directory inside the Docker image
COPY docker-compose.yml /task-management-system

# Set the working directory
WORKDIR /app

# Expose ports if needed
# EXPOSE <port>

# Run Docker Compose to start both frontend and backend applications
CMD ["docker-compose", "up", "-d"]
