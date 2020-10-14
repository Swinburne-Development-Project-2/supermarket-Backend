const router = require("express").Router();
var login = require('./login');
var register = require("./registration");
const {
  getProducts,
  searchProduct,
  deleteProducts,
  createFromCSV
} = require("./user.controller");
// get all products
router.get("/getAll", getProducts );
// search for a product by keyword
router.get("/search/:keyword", searchProduct);
// delete all products
router.get("/deleteAll", deleteProducts );
// This get request is to insert the data from CSV files to the database.
router.get("/CSV", createFromCSV);
router.post("/register",register.register);
router.post("/login",login.login);
module.exports = router;
