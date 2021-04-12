// Dependencies

const notesData = require('../db/db.json');
const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();
// const getNotes = require('getNotes');
// ROUTING

module.exports = (app) => {
  // API GET Request

  app.get('/api/'), (req, res) => res.json(index);

  app.get('/api/notes', (req, res) => res.json(notesData)); {
      app.get = notesData(noteList);
      fs.readFileSync('../db/db.json');
    
  }
const notes = JSON.parse(notesData)

  // API POST Requests

  app.post('/api/notes', (req, res) => {

      notesData.push(req.Data); {
      false.writeFileSync('../db/db.json',JSON.stringify(notesData), utf8);
      let newNote = newNote(notesData);
      newNote.id = uuidv4();
      res.json(newNote);
    }
  });


  app.post('/api/clear/:id', (req, res) => {
    // Empty out the arrays of data
    const requestID = req.params.id;
    notesData = clear;


    res.json({ ok: true });
  });
};
