'use strict';

// Полифил fetch для Node.js
// Нужен для того, чтобы совершать запросы за данными при рендеринге на сервере
require('isomorphic-fetch');

// Импортируем нужные нам зависимости
// «next» - основа для нашего Next.js приложения
const next = require('next');
// «express» - сервер , который мы будем использовать вместо встроенного в Next.js
const express = require('express');
// «body-paresr» - для того, чтобы разобрать тело POST запроса, чтобы сохранить заметку
const bodyParser = require('body-parser');

const setupApiRoutes = require('./routers/api');
const setupPagesRoutes = require('./routers/pages');

// Создаем экземляр Next.js приложения
const app = next({ dev: process.env.NODE_ENV !== 'production' });
// Создаем сервер
const server = express();

app.prepare().then(() => {
    // После того как вся подготовительная работа Next.js закончена мы можем сконфигурировать наш сервер

    server.use(bodyParser.json());

    setupApiRoutes(server, app);
    setupPagesRoutes(server, app);

    server.listen(3000, () => console.log('Listening on http://localhost:3000/notes/'));
});
