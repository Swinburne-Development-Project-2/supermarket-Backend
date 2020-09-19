const {
  createAProduct,
  getProducts,
  createFromCVS
} = require("./user.service");
//const { hashSync, genSaltSync, compareSync } = require("bcrypt");
//const { sign } = require("jsonwebtoken");

module.exports = {
  createAProduct: (req, res) => {
    const body = req.body;
    try{
    createAProduct(body, (err, results) => {
     
        return res.status(200).json({sucess:1, data:results})}); }
        catch(err) {console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection error"
          });
      
  }},

  getProducts: (req, res) => {
    try{ 
      getProducts( (err, results) => {
      return res.status(200).json({sucess:1, data:results})}); }
      catch(err) {console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error"
        });
    
}
},
  
  createFromCVS: (req, res) => {
     
        try{ 
          createFromCVS( (err, results) => {
          return res.status(200).json({sucess:1, data:results})}); }
          catch(err) {console.log(err);
            return res.status(500).json({
              success: 0,
              message: "Database connection error"
            });
        
    }
  },
}
