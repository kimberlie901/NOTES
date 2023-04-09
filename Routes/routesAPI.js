//Dependencies 
const router = require("express").Router();
const { json, response } = require("express");
const notes = require("../db/db.json");
const fs = require("fs");
const path = require("path");
//Gives each code a unique id when it's saved 
const {v4: uuidv4} = require("uuid");

//GET /api/notes should read the db.json file and return all saved notes as JSON
// router.get("/notes", (req, res) => {
//    res.json(notes);
// });

router.get("/notes", (req, res) => {
    fs.readFile(path.join(__dirname, "db/db.json"), "utf-8", (error, data) => {
        if(error) return res.json(error);
        data ? res.json(JSON.parse(data)) : res.json(false);
    });
});


//POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique ID when it's saved (look into npm packages that could do this for you).
router.post("/notes", (req, res) => {
    let newNote = req.body;
    notes.push(newNote);
    return console.log("Added a new note:" + newNote.title);
});

//Returns a note with a specific id 
router.get("/api/notes/id", (req, res) => {
    res.json(notes[req.uuidv4.id]);
})

//Displays the note when it is accessed 
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;