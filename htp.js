// JavaScript source code
const https = require('https');
const fs = require('fs');
const url = 'https://jsonplaceholder.typicode.com/posts';
https.get(url, (message) => {
    message.setEncoding('utf8');
    let body = '';
    message.on('data', (data) => {
        body += data;
    });
    message.on('end', () => {
        fs.writeFile('data.json', body, 'utf8', (err) => { console.log(err); });
    });
})