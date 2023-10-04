const URL = 'https://rickandmortyapi.com/api/character/'
const axios = require('axios')

const getCharById = (req, res) => {
    const { id } = req.params;
    axios.get(URL+id)
        .then(({data}) => {
            const { name, gender, species, origin, image, status } = data;
            const character = { id, name, gender, species, origin, image, status };
            return character.name
            ? res.json(character)
            : res.status(404).send('Not found')
        })
        .catch(error => {
            return res.status(500).send(error.message)
        })
}

module.exports = getCharById;