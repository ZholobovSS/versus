# Versus

Веб-приложение для создания, проведения и участия в турнирах по настольному теннису

### Стек технологий
* React
* Redux-Thunk
* Express
* Node.js
* MongoDB Atlas
* WebSocket
* Passport.js
* React-beautiful-dnd
* Chart.js
* Bootstrap

### Запуск проекта
1. Перейти в корневой каталог проекта
2. В командной строке выполнить (однократно для установки): 
```sh
npm install
```
3. Переименовать .env.sample в .env (в папке client и папке server) и заполнить поля:
```sh
REACT_APP_SERVER_URL=
REACT_APP_GOOGLE_ID=
REACT_APP_GOOGLE_CLIENT_SECRET=
REACT_APP_URL=

GOOGLE_ID=
GOOGLE_CLIENT_SECRET=
SERVER_URL=
ATLAS=
```
4. Запуск проекта:
```sh
npm start
```
### Краткое описание функционала системы:
У зарегистрированного пользователя есть возможность как принять участие в грядущем турнире, так и стать его организатором. Организатор мероприятия имеет возможность завершить запись, если число участников больше 4-х человек. Если набралось нечетное количество и кому-то не достается пары, то участники с наивысшим рейтингом автоматически пройдут в следующую стадию турнира. Рейтинги основаны на шахматной системе Эло.
Сдедите за своими успехами, любите спорт, занимайтесь спортом!

#### Главная страница
Только авторизованный пользователь имеет возможность создания своего собственного турнира. Есть возможность быстрой регистрации через Google.

![main](readme-assets/main.gif)

#### Турнир
Результаты матча динамически меняются в режиме реального времени благодаря технологии WebSocket.

![bracket](readme-assets/bracket.gif)

#### Страница профиля
Технология React-beautiful-dnd дает возможность каждому пользователю настроить личный кабинет на свой вкус.

![bracket](readme-assets/profile.gif)

#### Планы по развитию проекта
* Выбор вида спорта
* Больше вариаций турнирной сетки
* Мобильная версия приложения

### Наша команда
* [Аркадий кузнецов](https://github.com/Kuzzarvi)
* [Дьячков Юрий](https://github.com/YuriyDyachkov)
* [Виктор Резник](https://github.com/Vict0rFrost)
* [Илья Сирцев](https://github.com/SyrtsevIV)
