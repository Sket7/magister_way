#!/bin/bash
set -e

# Подключаем проверку
source "$(dirname "$0")/_check_env.sh"
check_env

echo "🚧 Building Docker images..."
docker compose build

echo "✅ Build complete!"
