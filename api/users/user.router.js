const router = require("express").Router();

const {
  getProducts,
  searchProduct,
  createFromCSV
} = require("./user.controller");
// get all products
router.get("/getAll", getProducts );
// search for a product by keyword
router.get("/search/:keyword", searchProduct);
// This get request is to insert the data from CSV files to the database.
router.get("/CSV", createFromCSV);
module.exports = router;
