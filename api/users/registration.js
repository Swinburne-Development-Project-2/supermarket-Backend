const pool = require("../../config/database");
var bcrypt = require('bcrypt');
const saltRounds = 10;
exports.register = async function(req,res){
    const password = req.body.password;
    const encryptedPassword = await bcrypt.hash(password, saltRounds)
    var users={
       "email":req.body.email,
       "password":encryptedPassword
     }
    
    pool.query('INSERT INTO users SET ?',users, function (error, results, fields) {
      if (error) {
        res.send({
          "code":400,
          "failed":"error ocurred"
        })
      } else {
        req.flash('success_msg','You have now registered!')
        res.send({
          "code":200,
          "success":"user registered sucessfully"
            });
        }
    });
  }