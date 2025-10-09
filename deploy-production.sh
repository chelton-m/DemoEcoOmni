#!/bin/bash

echo "🚀 Deploying to GitHub Pages..."

# Build for production with correct paths
echo "📦 Building for production..."
NODE_ENV=production npm run build

# Backup current root files (for local dev)
echo "💾 Backing up current files..."
cp index.html index.html.backup 2>/dev/null || true
cp -r _next _next.backup 2>/dev/null || true
cp -r logo logo.backup 2>/dev/null || true

# Copy production files to root
echo "📋 Copying production files..."
cp out/index.html .
cp out/404.html .
cp -r out/_next .
cp -r out/logo .

# Commit and push to GitHub
echo "📤 Committing and pushing to GitHub..."
git add .
git commit -m "Deploy latest build to GitHub Pages"
git push origin main

echo "✅ Deployment complete!"
echo "🌐 Your site will be available at: https://chelton-m.github.io/DemoEcoOmni/"
echo ""
echo "🔄 To restore local development:"
echo "   ./restore-local.sh"
