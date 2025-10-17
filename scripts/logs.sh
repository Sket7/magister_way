#!/bin/bash
set -e

source "$(dirname "$0")/_check_env.sh"
check_env

echo "📜 Attaching to logs (Ctrl+C to exit)..."
docker compose logs -f
