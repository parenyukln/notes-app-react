'use strict';

const Note = require('../models/note');

module.exports.list = (req, res) => {
    const notes = Note.findAll();

    res.json(notes);
}

module.exports.item = (req, res) => {
    const name = req.params.note;
    const note = Note.find(name);

    if (note) {
        res.json(note);
    } else {
        res.sendStatus(404);
    }
}

module.exports.create = (req, res) => {
    const note = new Note(req.body);

    note.save();

    res.sendStatus(201);
}
