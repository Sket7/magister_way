#!/bin/bash

check_env() {
  if ! command -v docker &> /dev/null; then
    echo "❌ Docker не найден. Установи его с https://docs.docker.com/get-docker/"
    exit 1
  fi

  if ! docker compose version &> /dev/null; then
    echo "❌ Docker Compose не найден. Установи Docker Desktop или compose-plugin:"
    echo "   https://docs.docker.com/compose/install/"
    exit 1
  fi

  echo "✅ Docker окружение готово!"
}
