#!/bin/bash

echo "🔄 Restoring local development files..."

# Remove production files
rm -f index.html 404.html
rm -rf _next logo

# Restore local files if they exist
if [ -f "index.html.backup" ]; then
    echo "📋 Restoring local index.html..."
    mv index.html.backup index.html
fi

if [ -d "_next.backup" ]; then
    echo "📋 Restoring local _next folder..."
    mv _next.backup _next
fi

if [ -d "logo.backup" ]; then
    echo "📋 Restoring local logo folder..."
    mv logo.backup logo
fi

echo "✅ Local development restored!"
echo "🏠 Run 'npm run dev' to start local development"
