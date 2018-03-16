'use strict';

const { parse } = require('url');

module.exports = (server, app) => {
    // Функция-обертка для более удобного рендеринга страниц
    function render(pageName) {
        return function (req, res) {
            const { query } = parse(req.url, true);

            return app.render(req, res, `/${pageName}`, query);
        }
    }

    // Стандартный обработчик для всех остальных страниц.
    // Например за css файлами
    function handleRequest(req, res) {
        const parsedUrl = parse(req.url, true);

        return app.getRequestHandler()(req, res, parsedUrl);
    }

    // Назначаем обработчики для запросов к страницам нашего интерфейса
    server
        .get('/notes', render('notes'))
        .get('/notes/:note', render('note'))
        .get('*', handleRequest);
};
