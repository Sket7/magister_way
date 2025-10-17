FROM oven/bun:latest

WORKDIR /app

# Копируем package.json / bun.lockb
COPY package.json bun.lockb* ./

# Устанавливаем зависимости
RUN bun install

# Копируем весь код
COPY . .

EXPOSE 3000

# dev запуск через bun
CMD ["bun", "start"]
