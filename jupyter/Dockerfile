FROM jupyter/base-notebook:latest

# Устанавливаем базовые утилиты
USER root
RUN apt-get update && apt-get install -y \
    build-essential \
    git \
    && rm -rf /var/lib/apt/lists/*

# Копируем список зависимостей
COPY requirements.txt /tmp/requirements.txt

# Устанавливаем Python-зависимости в среду Jupyter
RUN pip install --no-cache-dir -r /tmp/requirements.txt

# Возвращаем пользователя обратно
USER ${NB_UID}

# Рабочая директория (совпадает с volume)
WORKDIR /home/jovyan/work
