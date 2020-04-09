const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();

const dbpath = path.join(__dirname, '../db/db.json');


router.get("/", (req, res) => res.sendFile(dbpath));
router.post("/", (req, res) => {


        const dbread = fs.readFileSync(dbpath, 'utf8')
        const notes = JSON.parse(dbread)

        notes.push(req.body)
        notes.forEach((e,i) => { e.id = (i + 1) });

        const string =  JSON.stringify(notes)

        fs.writeFileSync(dbpath, string, function (err){
            if (err) throw err;
        })

        res.json(notes)

});
router.delete("/:id", (req, res) => {
    /*const {id} = req.params;
    const data = fs.readFileSync(dbpath, 'utf8');
    const notes = JSON.parse(data);

    notes.forEach(e, i, object) => {
        if (e.id ===parseInt(id)){
        }
    }*/

});

module.exports = router