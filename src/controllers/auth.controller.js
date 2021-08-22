// importo la conexion a las db y las querys con las consultas
import { getConnection, sqlServer, queries } from "../database";
import { User } from "../models/User";

const signup = async (req, res) => {
    try {
        const { username, email, password, roles } = req.body;
        const user = new User(
            username,
            email,
            User.encryptPassword(password)
        );

        const pool = await getConnection();

        let validarEmail = await pool.request()
            .input('email', sqlServer.NVarChar(), user.email)
            .query(queries.findUserByEmail);
        validarEmail = validarEmail.recordset[0][''];

        console.log(validarEmail)
        if(validarEmail) {

        }
/*
        await pool.request()
            .input('username', sqlServer.NVarChar(), user.username)
            .input('email', sqlServer.NVarChar(), user.email)
            .input('password', sqlServer.NVarChar(), user.password)
            .query(queries.addUser);
*/
        res.json(user);
    }
    catch (e) {
        res.status(500).json({
            msg: `error al crear usuario: ${ e }`
        })
    }
}

const signin = async (req, res) => {
    res.json({
        msg: "signin..."
    })
}

export {
    signup,
    signin
}
