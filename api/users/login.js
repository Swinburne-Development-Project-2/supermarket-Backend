const pool = require("../../config/database");
var bcrypt = require('bcrypt');
exports.login = async function(req,res){
    var email= req.body.email;
    var password = req.body.password;
    pool.query('SELECT * FROM users WHERE email = ?',[email], async function (error, results, fields) {
      if (error) {
        res.status(404).json({
          "messaege":"error ocurred"
        })
      }else{
        if(results.length >0){
          const comparision = await bcrypt.compare(password, results[0].password)
          if(comparision){
              res.status(200).json({
                "firstName": results[0].firstName,
                "lastName": results[0].lastName
              })
          }
          else{
            res.status(404).json({
                 "message":"Email and password does not match"
            })
          }
        }
        else{
          res.status(404).json({
            "message":"Email does not exist"
       });
        }
      }
      });
  }