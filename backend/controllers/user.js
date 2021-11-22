const bcrypt = require('bcrypt');
const connection = require('../models/connection');

exports.signup = (req, res, next) => {

    // //fake body
    // req.body.name = "testeur";
    // req.body.lastname = "ok";
    // req.body.email = "test@letest.fr";
    // req.body.password = "hbvdhdv";

    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = {
                name: req.body.name,
                lastname: req.body.lastname,
                email: req.body.email,
                password: hash,
            }

            connection.query(
                'INSERT INTO `user`(`name`, `lastname`, `email`, `password`) VALUES (?,?,?,?)',
                [user.name, user.lastname, user.email, user.password],
                function (error, results) {
                    if (error) {
                        if(error.sqlState === "23000") {
                            return res.status(400).json({error: "le mail existe déjà"})
                        }
                        return res.status(500).json(error);
                    }
                    return res.status(200).json(user);
                })
        })

}

//on compare le mail et le mdp saisit par l'utilisateur avec ceux de la BDD pour voir s'ils existent et s'ils correspondent
//
exports.login = (req, res, next) => {
    const passeword =
    // const login = {
    //      mail : req.body.email,
    //      password: req.body.password,
    // };
    //
    // connection.query(
    //     "SELECT password from user WHERE email = '" + login.mail + "'",
    //     function (error, results) {
    //         if (error) {
    //             return res.status(500).json(error);
    //         }
    //         bcrypt.compare(bcrypt.hash(login.password),  );
    //         // if(login.mail && login.password === passwordmysql){
    //         // return res.status(200).json(login)}
    //
    //         return res.status(200).json(login);
    //     })

}