'use strict';

const mocks = require('../mocks/notes.json');

const storage = mocks;

module.exports = class Note {
    constructor({ name, text }) {
        this.name = name;
        this.text = text;
    }

    save() {
        storage.push(this)
    }

    static find(name) {
        return storage.find(note => note.name === name);
    }

    static findAll() {
        return storage;
    }
}
