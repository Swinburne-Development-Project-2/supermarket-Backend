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
    // const salt = genSaltSync(10);
    // body.password = hashSync(body.password, salt);
    createAProduct(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error"
        });
      }
      return res.status(200).json({
        success: 1,
        data: results
      });
    });
  },
  getProducts: (req, res) => {
    getProducts((err,results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error"
        });
      }
      return res.status(200).json({
        success: 1,
        data: results
      });
    });
  },
  createFromCVS: (req, res) => {
      createFromCVS( (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection error"
          });
        }
        return res.status(200).json({
          success: 1,
          data: results
        });
      });
    }
  };

