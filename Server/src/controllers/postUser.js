const { User } = require('../DB_connection');

const postUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({message: "Faltan datos"});
    try {
        const [user, created] = await User.findOrCreate({
            where: {email},
            defaults: {password},
        })
        if (created) return res.status(200).json({message: "Usuario creado exitosamente", user});
        else return res.status(400).json({message: "El usuario ya existe"});
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

module.exports = postUser;