const fs = require('fs');

function reading(filename){
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error('reading file', err);
            return;
        }
        console.log('file contents', data);
    });
}

reading('package.json');
