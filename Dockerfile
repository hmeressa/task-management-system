# Use a base Docker image
FROM docker/compose:latest

# Set the working directory to /app
WORKDIR /app

# Copy the Docker Compose configuration to the /app directory inside the Docker image
COPY ./task-management-system-front-end /app/task-management-system-front-end

# Expose ports if needed
EXPOSE 5000

# Run Docker Compose to start the services defined in the docker-compose.yml file
CMD ["docker-compose", "up"]
