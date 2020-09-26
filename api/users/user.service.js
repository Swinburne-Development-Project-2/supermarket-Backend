const pool = require("../../config/database");
const fs = require("fs");
module.exports = {
    // Using @id and uuid to generate different id. It needs to add 1 more column to the file.
    createFromCSV: callBack => {
      // Using read files to catch all the name and csv file.
      const folder = "d:/Github/DP2/supermarket-Backend/Aldi/";
      fs.readdir(folder, (err, files) => {
        Array.from(files).forEach(file =>{
          switch (file) {
            case "Baby_food.csv":
              pool.query(
                `LOAD DATA LOCAL INFILE 'd:/Github/DP2/supermarket-Backend/Aldi/Baby_food.csv'
                INTO TABLE products_test
                FIELDS TERMINATED BY ',' ENCLOSED BY '"'
                LINES TERMINATED BY '\n'
                IGNORE 1 ROWS
                (@id,supermarket,category,product_name,product_id,price,cup_price,product_url,img_url,viewed_date,ratings,rating_count,product_specials,available_in_stock)
                SET id = unhex(replace(uuid(),'-',''));`
              ,
              (error,results,fields) =>
              {
                if (error) {
                  console.log(error);
                }
                console.log(results);
              }
            );
            break;
            case "Beauty.csv":
              pool.query(
                `LOAD DATA LOCAL INFILE 'd:/Github/DP2/supermarket-Backend/Aldi/Beauty.csv'
                INTO TABLE products_test
                FIELDS TERMINATED BY ',' ENCLOSED BY '"'
                LINES TERMINATED BY '\n'
                IGNORE 1 ROWS
                (@id,supermarket,category,product_name,product_id,price,cup_price,product_url,img_url,viewed_date,ratings,rating_count,product_specials,available_in_stock)
                SET id = unhex(replace(uuid(),'-',''));`
              ,
              (error,results,fields) =>
              {
                if (error) {
                  console.log(error);
                }
                console.log(results);
              }
            );
            break;
            case "Beer__Cider.csv":
              pool.query(
                `LOAD DATA LOCAL INFILE 'd:/Github/DP2/supermarket-Backend/Aldi/Beer__Cider.csv'
                INTO TABLE products_test
                FIELDS TERMINATED BY ',' ENCLOSED BY '"'
                LINES TERMINATED BY '\n'
                IGNORE 1 ROWS
                (@id,supermarket,category,product_name,product_id,price,cup_price,product_url,img_url,viewed_date,ratings,rating_count,product_specials,available_in_stock)
                SET id = unhex(replace(uuid(),'-',''));`
              ,
              (error,results,fields) =>
              {
                if (error) {
                  console.log(error);
                }
                console.log(results);
              }
            );
            break;
            case "Champagne__Sparkling.csv":
              pool.query(
                `LOAD DATA LOCAL INFILE 'd:/Github/DP2/supermarket-Backend/Aldi/Champagne__Sparkling.csv'
                INTO TABLE products_test
                FIELDS TERMINATED BY ',' ENCLOSED BY '"'
                LINES TERMINATED BY '\n'
                IGNORE 1 ROWS
                (@id,supermarket,category,product_name,product_id,price,cup_price,product_url,img_url,viewed_date,ratings,rating_count,product_specials,available_in_stock)
                SET id = unhex(replace(uuid(),'-',''));`
              ,
              (error,results,fields) =>
              {
                if (error) {
                  console.log(error);
                }
                console.log(results);
              }
            );
            break;
            case "Chocolate.csv":
              pool.query(
                `LOAD DATA LOCAL INFILE 'd:/Github/DP2/supermarket-Backend/Aldi/Chocolate.csv'
                INTO TABLE products_test
                FIELDS TERMINATED BY ',' ENCLOSED BY '"'
                LINES TERMINATED BY '\n'
                IGNORE 1 ROWS
                (@id,supermarket,category,product_name,product_id,price,cup_price,product_url,img_url,viewed_date,ratings,rating_count,product_specials,available_in_stock)
                SET id = unhex(replace(uuid(),'-',''));`
              ,
              (error,results,fields) =>
              {
                if (error) {
                  console.log(error);
                }
                console.log(results);
              }
            );
            break;
            case "Coffee.csv":
              pool.query(
                `LOAD DATA LOCAL INFILE 'd:/Github/DP2/supermarket-Backend/Aldi/Coffee.csv'
                INTO TABLE products_test
                FIELDS TERMINATED BY ',' ENCLOSED BY '"'
                LINES TERMINATED BY '\n'
                IGNORE 1 ROWS
                (@id,supermarket,category,product_name,product_id,price,cup_price,product_url,img_url,viewed_date,ratings,rating_count,product_specials,available_in_stock)
                SET id = unhex(replace(uuid(),'-',''));`
              ,
              (error,results,fields) =>
              {
                if (error) {
                  console.log(error);
                }
                console.log(results);
              }
            );
            break;
            case "Dairy__Eggs.csv":
              pool.query(
                `LOAD DATA LOCAL INFILE 'd:/Github/DP2/supermarket-Backend/Aldi/Dairy__Eggs.csv'
                INTO TABLE products_test
                FIELDS TERMINATED BY ',' ENCLOSED BY '"'
                LINES TERMINATED BY '\n'
                IGNORE 1 ROWS
                (@id,supermarket,category,product_name,product_id,price,cup_price,product_url,img_url,viewed_date,ratings,rating_count,product_specials,available_in_stock)
                SET id = unhex(replace(uuid(),'-',''));`
              ,
              (error,results,fields) =>
              {
                if (error) {
                  console.log(error);
                }
                console.log(results);
              }
            );
            break;
            case "Freezer.csv":
              pool.query(
                `LOAD DATA LOCAL INFILE 'd:/Github/DP2/supermarket-Backend/Aldi/Freezer.csv'
                INTO TABLE products_test
                FIELDS TERMINATED BY ',' ENCLOSED BY '"'
                LINES TERMINATED BY '\n'
                IGNORE 1 ROWS
                (@id,supermarket,category,product_name,product_id,price,cup_price,product_url,img_url,viewed_date,ratings,rating_count,product_specials,available_in_stock)
                SET id = unhex(replace(uuid(),'-',''));`,
              (error,results,fields) =>
              {
                if (error) {
                  console.log(error);
                }
                console.log(results);
              }
            );
            break;
            case "Gluten_Free.csv":
              pool.query(
                `LOAD DATA LOCAL INFILE 'd:/Github/DP2/supermarket-Backend/Aldi/Gluten_Free.csv'
                INTO TABLE products_test
                FIELDS TERMINATED BY ',' ENCLOSED BY '"'
                LINES TERMINATED BY '\n'
                IGNORE 1 ROWS
                (@id,supermarket,category,product_name,product_id,price,cup_price,product_url,img_url,viewed_date,ratings,rating_count,product_specials,available_in_stock)
                SET id = unhex(replace(uuid(),'-',''));`,
              (error,results,fields) =>
              {
                if (error) {
                  console.log(error);
                }
                console.log(results);
              }
            );
            break;
            case "Health.csv":
              pool.query(
                `LOAD DATA LOCAL INFILE 'd:/Github/DP2/supermarket-Backend/Aldi/Health.csv'
                INTO TABLE products_test
                FIELDS TERMINATED BY ',' ENCLOSED BY '"'
                LINES TERMINATED BY '\n'
                IGNORE 1 ROWS
                (@id,supermarket,category,product_name,product_id,price,cup_price,product_url,img_url,viewed_date,ratings,rating_count,product_specials,available_in_stock)
                SET id = unhex(replace(uuid(),'-',''));`,
              (error,results,fields) =>
              {
                if (error) {
                  console.log(error);
                }
                console.log(results);
              }
            );
            break;
            case "Household.csv":
              pool.query(
                `LOAD DATA LOCAL INFILE 'd:/Github/DP2/supermarket-Backend/Aldi/Household.csv'
                INTO TABLE products_test
                FIELDS TERMINATED BY ',' ENCLOSED BY '"'
                LINES TERMINATED BY '\n'
                IGNORE 1 ROWS
                (@id,supermarket,category,product_name,product_id,price,cup_price,product_url,img_url,viewed_date,ratings,rating_count,product_specials,available_in_stock)
                SET id = unhex(replace(uuid(),'-',''));`,
              (error,results,fields) =>
              {
                if (error) {
                  console.log(error);
                }
                console.log(results);
              }
            );
            break;
            case "Just_Organic.csv":
              pool.query(
                `LOAD DATA LOCAL INFILE 'd:/Github/DP2/supermarket-Backend/Aldi/Just_Organic.csv":
                INTO TABLE products_test
                FIELDS TERMINATED BY ',' ENCLOSED BY '"'
                LINES TERMINATED BY '\n'
                IGNORE 1 ROWS
                (@id,supermarket,category,product_name,product_id,price,cup_price,product_url,img_url,viewed_date,ratings,rating_count,product_specials,available_in_stock)
                SET id = unhex(replace(uuid(),'-',''));`,
              (error,results,fields) =>
              {
                if (error) {
                  console.log(error);
                }
                console.log(results);
              }
            );
            break;
            case "Laundry.csv":
              pool.query(
                `LOAD DATA LOCAL INFILE 'd:/Github/DP2/supermarket-Backend/Aldi/Laundry.csv'
                INTO TABLE products_test
                FIELDS TERMINATED BY ',' ENCLOSED BY '"'
                LINES TERMINATED BY '\n'
                IGNORE 1 ROWS
                (@id,supermarket,category,product_name,product_id,price,cup_price,product_url,img_url,viewed_date,ratings,rating_count,product_specials,available_in_stock)
                SET id = unhex(replace(uuid(),'-',''));`,
              (error,results,fields) =>
              {
                if (error) {
                  console.log(error);
                }
                console.log(results);
              }
            );
            break;
            case "Nappies_and_wipes.csv":
              pool.query(
                `LOAD DATA LOCAL INFILE 'd:/Github/DP2/supermarket-Backend/Aldi/Nappies_and_wipes.csv'
                INTO TABLE products_test
                FIELDS TERMINATED BY ',' ENCLOSED BY '"'
                LINES TERMINATED BY '\n'
                IGNORE 1 ROWS
                (@id,supermarket,category,product_name,product_id,price,cup_price,product_url,img_url,viewed_date,ratings,rating_count,product_specials,available_in_stock)
                SET id = unhex(replace(uuid(),'-',''));`,
              (error,results,fields) =>
              {
                if (error) {
                  console.log(error);
                }
                console.log(results);
              }
            );
            break;
            case "Olive_Oil.csv":
              pool.query(
                `LOAD DATA LOCAL INFILE 'd:/Github/DP2/supermarket-Backend/Aldi/Olive_Oil.csv'
                INTO TABLE products_test
                FIELDS TERMINATED BY ',' ENCLOSED BY '"'
                LINES TERMINATED BY '\n'
                IGNORE 1 ROWS
                (@id,supermarket,category,product_name,product_id,price,cup_price,product_url,img_url,viewed_date,ratings,rating_count,product_specials,available_in_stock)
                SET id = unhex(replace(uuid(),'-',''));`,
              (error,results,fields) =>
              {
                if (error) {
                  console.log(error);
                }
                console.log(results);
              }
            );
            break;
            case "Spirits.csv":
              pool.query(
                `LOAD DATA LOCAL INFILE 'd:/Github/DP2/supermarket-Backend/Aldi/Spirit.csv'
                INTO TABLE products_test
                FIELDS TERMINATED BY ',' ENCLOSED BY '"'
                LINES TERMINATED BY '\n'
                IGNORE 1 ROWS
                (@id,supermarket,category,product_name,product_id,price,cup_price,product_url,img_url,viewed_date,ratings,rating_count,product_specials,available_in_stock)
                SET id = unhex(replace(uuid(),'-',''));`,
              (error,results,fields) =>
              {
                if (error) {
                  console.log(error);
                }
                console.log(results);
              }
            );
            break;
            case "Super_Savers.csv":
              pool.query(
                `LOAD DATA LOCAL INFILE 'd:/Github/DP2/supermarket-Backend/Aldi/Super_Savers.csv'
                INTO TABLE products_test
                FIELDS TERMINATED BY ',' ENCLOSED BY '"'
                LINES TERMINATED BY '\n'
                IGNORE 1 ROWS
                (@id,supermarket,category,product_name,product_id,price,cup_price,product_url,img_url,viewed_date,ratings,rating_count,product_specials,available_in_stock)
                SET id = unhex(replace(uuid(),'-',''));`,
              (error,results,fields) =>
              {
                if (error) {
                  console.log(error);
                }
                console.log(results);
              }
            );
            break;
            case "Wine.csv":
              pool.query(
                `LOAD DATA LOCAL INFILE 'd:/Github/DP2/supermarket-Backend/Aldi/Wine.csv'
                INTO TABLE products_test
                FIELDS TERMINATED BY ',' ENCLOSED BY '"'
                LINES TERMINATED BY '\n'
                IGNORE 1 ROWS
                (@id,supermarket,category,product_name,product_id,price,cup_price,product_url,img_url,viewed_date,ratings,rating_count,product_specials,available_in_stock)
                SET id = unhex(replace(uuid(),'-',''));`,
              (error,results,fields) =>
              {
                if (error) {
                  console.log(error);
                }
                console.log(results);
              }
            );
            break;
          }
          
      });
    });
    return callBack(null, null);
      // pool.query(
      //   `LOAD DATA LOCAL INFILE 'd:/Github/DP2/supermarket-Backend/Aldi/Baby_food.csv'
      //   INTO TABLE products_test
      //   FIELDS TERMINATED BY ',' ENCLOSED BY '"'
      //   LINES TERMINATED BY '\n'
      //   IGNORE 1 ROWS
      //   (id,supermarket,category,product_name,product_id,price,cup_price,product_url,img_url,viewed_date,ratings,rating_count,product_specials,available_in_stock)`,
      // (error,results,fields) =>
      // {
      //   if (error) {
      //     callBack(error);
      //   }
      //   return callBack(null,results);
      // });
      
    },
  // search for a product by its keyword
    searchProduct: (keyword, callBack) => {
      const query = `select * from products_test where product_name REGEXP "[[:<:]]?[[:>:]]"`;
      pool.query(query
      ,
      [
        keyword
      ],
      (error, results) => {
        if (error) {
           callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getProducts: (callBack) => {
    pool.query(`select * from products_test`, (error, results) => {
      if (error) callBack(error);
      return callBack(null, results);
    });
  },
};

/* Note: Sample for Post in Postman
{"id": "",
	"supermarket":"Woolworths Supermarket",
	"category" :"Fruit & Veg",
	"product_name":"Fresh Broccoli each",
	"product_id": "",
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
