// DEPENDENCIES

const path = require('path');
// const notesData = require('../db/db.json');

// ROUTING

module.exports = (app) => {
  // => HTML GET Requests
  

  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  // If no matching route is found default to home
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
};
