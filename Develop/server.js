// DEPENDENCIES

const express = require('express');
const uuid = require ('uuid');
const fs = require('fs');
const path = require('path');

// EXPRESS CONFIGURATION

const app = express();

// PORT
const PORT = process.env.PORT || 8080;

// DATA PARSING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER

require('./routes/apiNotesRoutes')(app);
require('./routes/htmlRoutes')(app);

// LISTENER

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
