#!/bin/sh
docker build -t task-app -f src/commands/app.Dockerfile .
docker build -t task-db -f src/commands/db.Dockerfile .
