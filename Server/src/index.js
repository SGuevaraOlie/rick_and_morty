const http = require('http');
const PORT = 3001;
const getCharById = require('./controllers/getCharById')

http.createServer((req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const {url} = req;
    if (url.includes('/rickandmorty/character')){
        const id = Number(url.split('/').pop());
        return getCharById(res, id)
    }
}).listen(PORT, "localhost")

