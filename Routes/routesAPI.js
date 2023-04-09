//Dependencies 
const router = require("express").Router();
const notes = require("../db/db.json");
const fs = require("fs");
//Gives each code a unique id when it's saved 
const {v4: uuidv4} = require("uuid");

//GET /api/notes should read the db.json file and return all saved notes as JSON

router.get("/notes", (req, res) => {
   res.json(notes);
});
//POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique ID when it's saved (look into npm packages that could do this for you).

router.post("/notes", (req, res) => {
    let newNote = req.body;
    notes.push(newNote);
    return console.log("Added a new note:" + newNote.title);
});

router.get("/api/notes/id", (req, res) => {
    res.json(notes[req.uuidv4.id]);
})

module.exports = router;