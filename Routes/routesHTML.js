/** GET /notes should return the notes.html file
 * GET * should return the index.html file
 */

//Dependencies
const path = require("path");
const router = require("express").Router();

//HTML routes

// Get /notes this will return notes.html file as a response to the user when the GET request is made 
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// Get * this will return index.html file as a response to the user when the GET request is made

router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router; 