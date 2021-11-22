const connection = require('../models/connection');

exports.test = (req, res, next) => {
    connection.connect();

    connection.query('SELECT * FROM test LIMIT 1', function (error, results) {
        if(error){
            return res.status(500).json(error);
        }
        return res.status(200).json(results[0]);
    })
    connection.end();
}