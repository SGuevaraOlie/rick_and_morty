const URL = 'https://rickandmortyapi.com/api/character/'
const axios = require('axios')

const getCharById = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, gender, species, origin, image, status } = (await axios(URL+id)).data;
        const character = { id, name, gender, species, origin, image, status };
        return character.name
        ? res.json(character)
        : res.status(404).send('Not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = getCharById;