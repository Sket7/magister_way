#!/bin/bash
set -e

# Подключаем проверку окружения
source "$(dirname "$0")/_check_env.sh"
check_env

echo "🔄 Starting full rebuild..."

# Остановка контейнеров
echo "🛑 Stopping existing containers..."
docker compose down -v --remove-orphans

# Сборка образов
echo "🚧 Building Docker images..."
docker compose build

# Поднятие контейнеров
echo "🚀 Starting services..."
docker compose up -d

echo "✅ Rebuild complete!"
echo "🌐 JupyterLab: http://localhost:8888"
echo "🧩 Backend: http://localhost:3000"
