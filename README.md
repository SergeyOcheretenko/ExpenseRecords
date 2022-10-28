# ExpenseRecords

## Локальне використання

#### Встановлення Node.js та npm

Проект створено з використаннях технологій **Node.js** та **NPM**.

Встановлення Node.js та NPM на локальний пристрій:
```bash
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm
```

Використаємо **NVM** для встановлення бажаної версії Node.js.

**Встановлюємо NVM:**
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
source ~/.bashrc
```

Можемо отримати список усіх доступних для встановлення версій Node.js:
```bash
nvm list-remote
```

**Встановлюємо потрібну версію Node.js:**
```bash
nvm install v17.3.1
```

#### Запуск

Клонування репозиторію:
```bash
git clone ...
cd ExpenseRecords
```

Встановлення залежностей:
```bash
npm install
```

Запуск проєкту:
```bash
npm run start
```

## Локальне використання через Docker

#### Встановлення Docker та docker-compose

**Linux**

Debian/Ubuntu:

```bash
sudo apt-get docker docker-compose
```

Red Hat/Fedora:

```bash
sudo dnf install docker docker-compose
```

#### Створення контейнеру

```bash
sudo docker build -t <image_name> .
sudo docker-compose build
sudo docker-compose up
```
