const pool = require("../../config/database");

module.exports = {
  createAProduct: (data, callBack) => {
    pool.query(
      `insert into products_test(supermarket,category,product_name,product_id,price,cup_price,product_url,img_url,viewed_date,ratings,rating_count,product_specials,available_in_stock)
                      values(?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        data.supermarket,
        data.category,
        data.product_name,
        data.product_id,
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
      (error, results) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  // Using @id and uuid to generate different id. It needs to add 1 more column to the file.
  createFromCVS: callBack => {
    pool.query(
      `LOAD DATA INFILE 'd:/Github/DP2/supermarket-Backend/Woolies/lunch_box.csv'
      INTO TABLE products_test
      FIELDS TERMINATED BY ',' ENCLOSED BY '"'
      LINES TERMINATED BY '\n'
      IGNORE 1 ROWS
      (@id,supermarket,category,product_name,product_id,price,cup_price,product_url,img_url,viewed_date,ratings,rating_count,product_specials,available_in_stock)
      SET id = unhex(replace(uuid(),'-',''));`
    ),
    (error,results,fields) =>
    {
      if (error) {
        callBack(error);
      }
      return callBack(null,results);
    }
    
  },
  getProducts: callBack => {
  pool.query(
    `select * from products_test`,
    (error,results) => {
      if (error)
        callBack(error);
    return callBack(null,results);
    }
  )
  }

};

/* Note
{
  localhost:3000/api/users/
  
	"product_id": "",
	"supermarket":"Woolworths Supermarket",
	"category" :"Fruit & Veg",
	"product_name":"Fresh Broccoli each",
	"price": "$99",
	"cup_price":"$0.99 / 1EA",
	"product_url":"https://www.woolworths.com.au/shop/productdetails/134681/fresh-broccoli",	
	"img_url":"https://cdn0.woolworths.media/content/wowproductimages/medium/134681.jpg",
	"viewed_date":"9/10/2020 9:40",	
	"ratings":"",
	"rating_count":"0",	
	"product_specials":"",	
	"available_in_stock":"TRUE"
} 

*/