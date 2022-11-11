 //Dependencies
 const fs = require('fs');
 //Router
const app = require('express').Router();


 //GET route for displaying notes
app.get('/notes', (req, res)=> {
 fs.readFile('db/db.json', 'utf8',(data) => {
  console.log(data)
   return res.json(JSON.parse(data));
 });
});

//POST request to create a new note and save it
app.post('/notes', (req, res,) => {
  fs.readFile('db/db.json', 'utf8', (err, data) => {
    console.log(err);
  const noteList = JSON.parse(data);
  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      noteId: "1"
    };
      noteList.push(newNote);
      
      fs.writeFile('db/db.json', JSON.stringify(noteList), 'utf8',  (err) => { 
      if (err) {
        console.log(err);
      } else {
          return res.json(noteList);
        }
      });
    }
  });
});

// //Delete request to delete certain note
// app.delete('api/notes{id}', (req, res) => {
//   fs.readFile('/db/db.json', 'utf8', (err, data) => {
//     if(!activeNote.id) 
// });


 module.exports = app;