# Use a base image that includes Docker Compose
FROM docker/compose:latest as builder

# Set working directory
WORKDIR /app

# Copy the entire project directory into the Docker image
COPY . /app

# Build the application using Docker Compose
RUN docker-compose build

# Stage 2: Final image
FROM alpine:latest

# Copy built artifacts from previous stage
COPY --from=builder /app /app

# Set working directory
WORKDIR /app

# Expose any necessary ports
# EXPOSE <port>

# Define any environment variables
# ENV ...

# Define the command to start the application
CMD ["docker-compose", "up"]
