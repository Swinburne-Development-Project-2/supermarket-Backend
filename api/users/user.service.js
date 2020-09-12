const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into products_test(product_id,supermarket,category,product_name,price,cup_price,product_url,img_url,viewed_date,ratings,rating_count,product_specials,available_in_stock)
                      values(unhex(replace(uuid(),'-','')),?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        data.product_id,
        data.supermarket,
        data.category,
        data.product_name,
        data.price,
        data.cup_price,
        data.product_url,
        data.img_url,
        data.viewed_date,
        data.ratings,
        data.rating_count,
        data.product_specials,
        data.available_in_stock
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  }
  

};
