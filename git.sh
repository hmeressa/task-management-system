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
    echo "╔════════════════════════════════════╗"
    echo "║          Git Operations Menu       ║"
    echo "╚════════════════════════════════════╝"
}

# Function to display fancy footer
fancy_footer() {
    echo ""
    echo "══════════════════════════════════════"
}

# Function to display fancy option
# Function to display fancy option
fancy_option() {
    local number=$1
    local description=$2
    local padding=$((30 - ${#description}))         # Calculate padding to maintain uniform width
    local padding_str=$(printf '%*s' "$padding" '') # Create padding string
    echo "║   $number. $description$padding_str║"
}

# Loop to prompt the user until the user chooses to quit
while true; do
    fancy_header
    fancy_option "1" "Check git status"
    fancy_option "2" "Add changes"
    fancy_option "3" "Commit changes"
    fancy_option "4" "Push changes to remote"
    fancy_option "5" "Return to the root directory"
    fancy_option "6" "Show options again"
    fancy_option "7" "Show usage information"
    fancy_option "0" "Quit"
    fancy_footer

    read -p "Enter the number of your choice: " choice

    case "$choice" in
    1)
        fancy_header
        echo "Checking git status..."
        git status
        fancy_footer
        ;;
    2)
        fancy_header
        echo "Adding changes..."
        git add .
        fancy_footer
        ;;
    3)
        fancy_header
        echo "Committing changes..."
        read -p "Enter your commit message: " commit_message
        git commit -m "$commit_message"
        fancy_footer
        ;;
    4)
        fancy_header
        echo "Pushing changes to remote..."
        git push origin main
        fancy_footer
        ;;
    5)
        fancy_header
        echo "Returning to the root directory..."
        cd - || exit
        fancy_footer
        ;;
    6)
        continue # Show options again
        ;;
    7)
        fancy_header
        usage # Show usage information
        fancy_footer
        ;;
    0)
        fancy_header
        echo "Exiting script. Have a nice day!"
        fancy_footer
        exit 0 # Quit the script
        ;;
    *)
        fancy_header
        echo "Invalid choice. Please select a valid option."
        fancy_footer
        ;;
    esac
done
