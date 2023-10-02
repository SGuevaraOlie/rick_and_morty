const axios = require('axios');

const getCharById = (res, id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => {
        let {name, gender, species, origin, image, status} = response.data;
        let char = {
            id:id,
            name,
            gender,
            species,
            origin: origin.name,
            image,
            status
        };
        res.writeHead(200, {'Content-Type':'application/json'})
            return res.end(JSON.stringify(char));
    })
    .catch((error) => {
        res.writeHead(500, {'Content-Type':'text/plain'})
            return res.end(error.message)
    })
}

module.exports = getCharById;