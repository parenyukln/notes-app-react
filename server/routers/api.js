'use strict';

const { create, item, list } = require('../controllers/notes');

module.exports = server => {
    // Назначаем обработчики для запросов к «API»
    server
        .get('/api/notes', list)
        .get('/api/notes/:note', item)
        .post('/api/notes', create);
};
