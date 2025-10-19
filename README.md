# Сервис динамической интерпретации алгоритмов обработки мультимодальных научных данных

## Надо для запуска

- git
- docker
- nodejs
- bun (пакетный менеджер для node)

## Установка

1. Клонируем репозиторий:

```bash
git clone https://github.com/Sket7/magister_way.git

cd magister_way
```

2. Разрешаем запуск скриптов:

```bash
chmod +x scripts/*.sh
```

3. Запуск:

- В докере

```bash
./scripts/rebuild.sh
```

- Локально (использовать bun):

```bash
cd backend && bun install
```

## Полезно!

### Дока юпиера

- https://jupyter-server.readthedocs.io/en/latest/developers/rest-api.html
