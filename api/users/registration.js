const pool = require("../../config/database");
var bcrypt = require('bcrypt');
const saltRounds = 10;
exports.register = async function(req,res){
    const password = req.body.password;
    const encryptedPassword = await bcrypt.hash(password, saltRounds)
    var users={
       "firstName": req.body.firstName,
       "lastName": req.body.lastName,
       "email":req.body.email,
       "password":encryptedPassword
     }
    
    pool.query('INSERT INTO users SET ?',users, function (error, results, fields) {
      if (error) {
        res.status(404).json({
          "message":"error ocurred"
        })
      } else {
        res.status(200).json({
          "message":"user registered sucessfully"
            });
        }
    });
  }