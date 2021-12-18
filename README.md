# okolokalyana.ru

## Развертывание для разработки

- Для успешного развертывания фронта понадобится Nodejs 10, версии выше 10 не компилят код
- `php -v` - Должен стоять от 7.3
- `mysql --version` - Минимальная версия - `Ver 8.0.20-0ubuntu0.20.04.1 for Linux on x86_64 ((Ubuntu))`
- `git init ` - Устанавливаем гит
- `git pull https://github.com/moseffect21/okolo_kalyana.git` - Пуллим обновление
- `cp .env.example .env` - Делаем локальный конфиг .env
- Изменяем .env файл, то есть вставляем данные для подключения к БД и ключи для авторизации.
- `npm install`
- `composer install` - Устанавливаем необходимые библиотеки
- `php artisan migrate` - Создаем необходимые таблицы
- `chmod -R 777 storage/` - Добавляем нужные права для сохранения некоторых данных
- `php artisan key:generate` - Генерируем ключ
- `php artisan serve` - Запускаем локально сервер для проверки
