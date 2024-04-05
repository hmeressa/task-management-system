#!/bin/bash

# Render login
render login --token "your-render-token"

# Build and push Docker images
docker-compose build
docker-compose push

# Deploy to Render
render up --file docker-compose.yml
