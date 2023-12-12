#!/bin/bash

# Check if docker-compose is available in the PATH
if ! command -v docker-compose &>/dev/null; then
    echo "Error: 'docker-compose' command not found. Please make sure Docker Compose is installed and in your PATH."
    exit 1
fi

# Run Docker Compose with options
docker-compose down

# Check the exit code of the docker-compose command
if [ $? -eq 0 ]; then
    echo "The App Container donw successfully."
else
    echo "Error: Failed to donw App Container."
    exit 1
fi
