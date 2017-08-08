const sourceFolder = '/sources/';
const destFolder = '/processed/';
const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname+  sourceFolder),  (err, files) => {
    if (err) {
        throw err;
    }
    files.forEach(file => {
        let fileParts = file.split(".");
        let extension = fileParts[fileParts.length -1];
        if (extension == 'srt' || extension == 'txt') {
            fs.readFile(path.join(__dirname+  sourceFolder +  file), (err, content) => {
                let fileContent = content.toString();
                fileContent = fileContent.replace(/[0-9]{2}:[0-9]{2}:[0-9]{2}\.[0-9]{3},[0-9]{2}:[0-9]{2}:[0-9]{2}\.[0-9]{3}/gi, "");
                fileContent = fileContent.replace(/\.{3}/gi, "…");
                fileContent = fileContent.replace(/\r\n|\r|\n/gi, " ");
                fileContent = fileContent.replace(/\. /gi, ".\n\n");
                fileContent = fileContent.replace(/\!/gi, "\!\n\n");
                fileContent = fileContent.replace(/\?/gi, "\?\n\n");
                fileContent = fileContent.replace(/\n {1,}/gi, "\n");
                fileContent = fileContent.replace(/ {2,}/gi, " ");
                fileContent = fileContent.replace(/^[ ]{1,}/gm, "");
                //console.log(fileContent);
                fs.writeFile(path.join(__dirname+  destFolder +  file), fileContent, (err) => {
                    console.log(file, "done");
                })
            })
        }
    });
});