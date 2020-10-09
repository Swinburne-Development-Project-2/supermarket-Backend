// Using modules from Service file.
const {
  getProducts,
  searchProduct,
  deleteProducts,
  createFromCSV,
} = require("./user.service");

module.exports = {
  // get all products in the database
  getProducts: (req, res) => {
    try {
      getProducts((err, results) => {
        return res.status(200).json({ sucess: 1, data: results });
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        success: 0,
        message: "Database connection error",
      });
    }
  },
   // delete all products to update the database weekly
   deleteProducts: (req, res) => {
    try {
      deleteProducts((err, results) => {
        return res.status(200).json({ sucess: 1, data: results });
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        success: 0,
        message: "Database connection error",
      });
    }
  },
  // search for products that the name has a specific keyword.
  // return the json file in the exact format of the contract.
  searchProduct: (req, res) => {
    const {keyword} = req.params;
    try {
      searchProduct(keyword, (err, results) => {
        return res.status(200).json(results);
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        success: 0,
        message: "Database connection error",
      });
    }
  },

  // initializing or updating the data in the database from CSV file
  createFromCSV: (req, res) => {
    try {
      createFromCSV((err, results) => {
        return res.status(200).json({ sucess: 1, data: results });
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        success: 0,
        message: "Database connection error",
      });
    }
  },
};
