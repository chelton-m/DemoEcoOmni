#!/bin/bash

# Build the project
echo "Building project..."
npm run build

# Copy files to root for GitHub Pages
echo "Copying files to root..."
cp -r out/* .

# Add and commit changes
echo "Committing changes..."
git add .
git commit -m "Deploy latest changes to production"

# Push to GitHub
echo "Pushing to GitHub..."
git push origin main

# Clean up for local development
echo "Cleaning up for local development..."
rm -rf _next index.html static

echo "Deployment complete! Local development is clean."
