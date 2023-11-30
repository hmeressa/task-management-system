# Use an official PostgreSQL image as the base image
FROM postgres:latest

# Set the working directory in the container
WORKDIR /app

# Set environment variables for PostgreSQL
ENV POSTGRES_USER hmeressa
ENV POSTGRES_PASSWORD hmeressa
ENV POSTGRES_DB taskApp

# Expose the PostgreSQL port
EXPOSE 5432
