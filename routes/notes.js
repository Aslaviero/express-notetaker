 //Dependencies
 const fs = require('fs');
 const uuid = require('../helpers/uuid');
 //Router
const app = require('express').Router();


 //GET route for displaying notes
app.get('/notes', (req, res)=> {
 const data = fs.readFileSync('db/db.json', 'utf8')
 console.log(JSON.parse(data));
  res.json(JSON.parse(data));
});

//POST request to create a new note and save it
app.post('/notes', (req, res) => {
  fs.readFile('db/db.json', 'utf8', (err, data) => {
    console.log(err);
  let noteList = JSON.parse(data);

  const { title, text } = req.body;
  if (req.body) {
    const newNote = {
      title,
      text,
      noteId: uuid(),
    };
      noteList.push(newNote);
      fs.writeFile('db/db.json', JSON.stringify(noteList), 'utf8',  (err) => { 
      if (err) {
        console.log(err);
        
      } else {
        console.log(data)
           res.json(JSON.parse(data));
        }
      });
    }
  });
});

//Delete request to delete certain note
app.delete('/notes/:id', (req, res) => {
  fs.readFileSync('db/db.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err)
    } else {
      noteList = JSON.parse(data);
      console.log(data);
    }
  });
});


 module.exports = app;