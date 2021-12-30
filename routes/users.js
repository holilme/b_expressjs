const express = require('express');
const router = express.Router()

router.get('/list', function(req, res) {
    let sql = 'SELECT * FROM user' ;
    db.query(sql, function(err, data, fields) {
        if (err) throw err;
            res.json({
            status: 200,
            data,
            message: "User lists retrieved succesfully"
        })
    })
})

router.post('/new',function(req, res) {
    let sql = 'INSERT INTO users(name , gender) VALUES (?)';

    let values = [
        req.body.name,
        req.body.gender
    ];
    db.query(sql, [values], function(err,data,fields) {
        if (err) throw err;
        res.json({
            status: 200,
            message: "New user added succesfully"
        })
    })
});
module.exports = router