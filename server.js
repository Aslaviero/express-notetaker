// Dependecies
const express = require('express');
const path = require('path');
const fs = ('fs');

// Setting up server
const app = express();
var PORT = process.env.PORT || 3001;


app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(path.join(_dirname, 'public')));

app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname,'public/index.html'));
  });

  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname,'public/notes.html'));
});