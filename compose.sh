#!/bin/bash

# Function to display usage information
usage() {
    echo "Usage: $0 [options]"
    echo "Options:"
    echo "  -s, --start     Start Docker Compose"
    echo "  -k, --stop      Stop Docker Compose"
    echo "  -r, --restart   Restart Docker Compose"
    echo "  -l, --reload    Reload Docker Compose"
    echo "  -d, --delete    Delete Docker Compose volumes"
    echo "  -h, --help      Show usage information"
    echo "  -q, --quit      Quit the script"
    exit 1
}

# Function to display fancy header
fancy_header() {
    clear
    echo "╔════════════════════════════════════╗"
    echo "║     Compose Operations Menu        ║"
    echo "╚════════════════════════════════════╝"
}

# Function to display fancy option
fancy_option() {
    local number=$1
    local description=$2
    local padding=$((30 - ${#description}))         # Calculate padding to maintain uniform width
    local padding_str=$(printf '%*s' "$padding" '') # Create padding string
    echo "║   $number. $description$padding_str║"
}

# Function to display fancy footer
fancy_footer() {
    echo "╚════════════════════════════════════╝"
}

# Function to start Docker Compose
start_docker_compose() {
    echo "Starting Docker Compose..."
    docker-compose up --build
    echo "Docker Compose operation completed."
}

# Function to prompt the user for options
options() {
    fancy_header # Display fancy header
    fancy_option "1" "Start Docker Compose"
    fancy_option "2" "Stop Docker Compose"
    fancy_option "3" "Restart Docker Compose"
    fancy_option "4" "Reload Docker Compose"
    fancy_option "5" "Delete Docker Compose volumes"
    fancy_option "6" "Show options again"
    fancy_option "7" "Show usage information"
    fancy_option "0" "Quit"
    fancy_footer # Display fancy footer

    read -p " *Enter the number of your choice:  * " choice
}

# Variable to track whether Docker Compose has been started
docker_compose_started=false

# Loop to prompt the user until the user chooses to quit
while true; do
    options # Prompt the user for options
    case "$choice" in
    1)
        if [ "$docker_compose_started" = false ]; then
            start_docker_compose
            docker_compose_started=true
        else
            echo "Docker Compose has already been started."
        fi
        ;;
    2)
        echo "Stopping Docker Compose..."
        docker-compose down
        echo "Docker Compose stopped."
        ;;
    3)
        echo "Restarting Docker Compose..."
        docker-compose restart
        echo "Docker Compose restarted."
        ;;
    4)
        echo "Reloading Docker Compose..."
        docker-compose reload
        echo "Docker Compose reloaded."
        ;;
    5)
        echo "Deleting Docker Compose volumes..."
        docker-compose down -v
        echo "Docker Compose volumes deleted."
        ;;
    6)
        continue # Show options again
        ;;
    7)
        usage # Show usage information
        ;;
    0)
        break # Exit the loop
        ;;
    *)
        echo "Invalid choice. Please select a valid option."
        ;;
    esac
done

echo "Exiting script. Have a nice day!"
