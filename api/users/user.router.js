const router = require("express").Router();

const {
  createAProduct,
  getProducts,
  createFromCVS
} = require("./user.controller");

router.post("/", createAProduct);
router.get("/", getProducts );
router.post("/CVS", createFromCVS);
module.exports = router;
