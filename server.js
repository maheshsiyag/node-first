const _ = require('yargs');
const fil = require('fs');
//console.log(process.argv);
//console.log(_.argv._, _.argv.title, _.argv.doc);
//fil.writeFile('./a.txt', 'I am Mahesh', 'utf8', (err) => { console.log(err) });
const title = {
    describe: 'hi title',
    demand: true,
    alias: 't'
};
const desc = {
    describe: 'desc',
    demand: true,
    alies:'b'
};
const k = _.command('getl', 'this isse', { title: title, desc: desc }).help().argv;
//console.log('k title=' , k);

var pro = new Promise((resolve, reject) => { if (k.title === 'ok') { console.log('call resolve'); resolve(k.title); } else { console.log('reject call'); reject('no ok'); } });
//pro.then((h) => { console.log(h); }).catch((err) => { console.log(err); });
pro.then((h) => { console.log(h); }, (err) => { console.log(err); });
const axios = require('axios');
axios.get('https://api.github.com/users/maheshsiyag').then((res) => { console.log(res); }).catch((rej) => { console.log(rej); });