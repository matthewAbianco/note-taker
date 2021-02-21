const fs = require("fs");
const path = require("path");

function saveToDatabase(notesArray) 
{
    fs.writeFileSync(
        path.join(__dirname, '../savedData/savedData.json'),
        JSON.stringify(notesArray, null, 2)
    );

}

module.exports = saveToDatabase;