#!/bin/bash

# List of packages (directories) in your monorepo
PACKAGES=("task-management-system-front-end" "task-management-system-back-end")

# Loop through each package
for PACKAGE in "${PACKAGES[@]}"; do
    echo "Processing package: $PACKAGE"
    cd exit

    # Check if there are changes
    if git diff --quiet; then
        echo "No changes in package: $PACKAGE"
    else
        # Show changes
        echo "Changes in package: $PACKAGE"
        git diff

        # Add changes
        git add .

        # Commit changes
        git commit -m "Your descriptive commit message here"

        # Push changes
        git push origin main
    fi

    # Return to the root directory
    cd - || exit
done
