const router = require("express").Router();

const {
  createAProduct,
  getProducts,
  createFromCVS
} = require("./user.controller");
// create a product by insert a json file in postman
router.post("/", createAProduct);
//get all products
router.get("/", getProducts );
// This post request is to insert the data from CSV files to the database.
router.post("/CVS", createFromCVS);
module.exports = router;
