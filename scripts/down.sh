#!/bin/bash
set -e

source "$(dirname "$0")/_check_env.sh"
check_env

echo "🧹 Stopping all containers..."
docker compose down -v --remove-orphans

echo "✅ Cleaned up!"
