// Using modules from Service file.
const {
  getProducts,
  searchProduct,
  createFromCSV,
} = require("./user.service");

module.exports = {
  // Create 1 product is not necessary in our website.

  // createAProduct: (req, res) => {
  //   const body = req.body;
  //   try {
  //     createAProduct(body, (err, results) => {
  //       return res.status(200).json({ sucess: 1, data: results });
  //     });
  //   } catch (err) {
  //     console.log(err);
  //     return res.status(500).json({
  //       success: 0,
  //       message: "Database connection error",
  //     });
  //   }
  // },

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
  searchProduct: (req, res) => {
    const {keyword} = req.params;
    try {
      searchProduct(keyword, (err, results) => {
        return res.status(200).json({ success: 1, data: results });
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
