#!/bin/bash
set -e

source "$(dirname "$0")/_check_env.sh"
check_env

echo "🚀 Starting Jupyter + backend..."
docker compose up -d

echo "🌐 Jupyter running at: http://localhost:8888"
echo "🧩 Backend running at: http://localhost:8000"
