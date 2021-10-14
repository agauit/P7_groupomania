const connection = require('../models/connection');

exports.test = (req, res, next) => {
    connection.connect();

    connection.query('SELECT * FROM test', function (error, results) {
        if(error){
            return res.status(500).json(error);
        }
        return res.status(200).json(results);
    })
    connection.end();
}