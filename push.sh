#!/bin/bash

# List of packages (directories) in your monorepo
PACKAGES=("task-management-system-front-end" "task-management-system-front-end")

# Loop through each package
for PACKAGE in "${PACKAGES[@]}"; do
    echo "Processing package: $PACKAGE"
    cd "task-management-system/$PACKAGE" || exit

    # Check status
    git status

    # Add changes
    git add .

    # Commit changes
    git commit -m "Your descriptive commit message here"

    # Push changes
    git push origin main

    # Return to the root directory
    cd - || exit
done
