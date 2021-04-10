// Dependencies

const notesData = require('../db/db.json');
const express = require('express');
const fs = require('fs');
const uuid = require ('uuid');

const app = express();

// ROUTING

module.exports = (app) => {
  // API GET Request

  app.get('/api/notes', (req, res) => res.json(notesData)); {
      notesData = getNotes(noteList);
      fs.readFileSync('db/db.json');
      res.json(notesData);
  }


  // API POST Requests

  app.post('/api/notes', (req, res) => {

      notesData.push(req.Data); {
      false.writeFileSync('.db/db.json',JSON.stringify(notesData), utf8);
      res.json(true);
    }
  });

  app.post('/api/clear/:id', (req, res) => {
    // Empty out the arrays of data
    const requestID = req.params.id;
    notesData.length = 0;


    res.json({ ok: true });
  });
};
