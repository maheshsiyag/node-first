const exp = require('express');
const hbs = require('hbs');
var app = exp();
app.use(exp.static(__dirname + '/public/'));
app.set('View engine', 'hbs');
app.set('views', __dirname + '/public/');
hbs.registerPartials(__dirname + '/public/');
hbs.registerHelper('sci', (text) => { return text; });
app.get('/abot', (req, res) => { res.render('about.hbs', { name: 'mahesh', dat:new Date() }) })
app.get('/ok', (request, resolve) => { console.log(request.method); resolve.send('<h1>Mahesh</h1>'); });
app.get('/about', (request, resolve) => { resolve.send('<h1>About</h1>'); });
const rel = require('readline');
const rl = rel.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('What do you think of Node.js? ', (answer) => {
    // TODO: Log the answer in a database
    console.log(`Thank you for your valuable feedback: ${answer}`);

    rl.close();
});
var port = process.SET_PORT || 3000;
app.listen(port, () => { console.log('Server is open'); });