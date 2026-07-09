#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
EXTENSION_NAME="directus-extension-editor-styles"
EXTENSIONS_DIR="$SCRIPT_DIR/../extensions/$EXTENSION_NAME"
DOCKER_DIR="$SCRIPT_DIR/../docker"

cd "$SCRIPT_DIR"

echo "📦 Building editor-styles extension..."
npm run build

echo "📁 Copying to extensions directory..."
rm -rf "$EXTENSIONS_DIR"
mkdir -p "$EXTENSIONS_DIR"
cp -r dist/* "$EXTENSIONS_DIR/"
cp package.json "$EXTENSIONS_DIR/"

echo "🔄 Restarting Directus..."
cd "$DOCKER_DIR"
docker compose --env-file ./env/prod.env restart directus

echo "✅ Done! CSS available at /editor-styles/styles.css"