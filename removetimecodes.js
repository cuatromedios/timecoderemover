const sourceFolder = './sources/';
const destFolder = './processed/';
const fs = require('fs');

fs.readdirSync(sourceFolder).forEach(file => {
    console.log(file);
})