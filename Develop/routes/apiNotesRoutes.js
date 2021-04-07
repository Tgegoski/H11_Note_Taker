// Dependencies

const notesData = require('../data/notesData');
const uuid = require ('uuid');

// ROUTING

module.exports = (app) => {
  // API GET Request

  app.get('/api/notes', (req, res) => res.json(notesData));


  // API POST Requests

  app.post('/api/notes', (req, res) => {

    if (notesData) {
      notesData.push(req.body);
      res.json(true);
    } else {
      existingData.push(req.body);
      res.json(false);
    }
  });


  app.post('/api/clear', (req, res) => {
    // Empty out the arrays of data
    notesData.length = 0;


    res.json({ ok: true });
  });
};
