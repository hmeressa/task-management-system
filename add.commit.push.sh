#!/bin/bash
for app in task-management-system-back-end task-management-system-front-end; do
    echo "Processing $app"
    cd $app
    git add .
    git commit -m "Commit message for $app changes"
    git push origin master
    cd ..
done
