# Use a base Docker image
FROM docker/compose:latest

# Copy the Docker Compose configuration to the /app directory inside the Docker image
COPY docker-compose.yml ./app/

# Set the working directory to /app
WORKDIR /app

# Expose ports if needed
# EXPOSE <port>

# Run Docker Compose to start the services defined in the docker-compose.yml file
CMD ["docker-compose", "up"]
