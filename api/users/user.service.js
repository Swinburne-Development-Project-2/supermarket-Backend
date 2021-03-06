const pool = require("../../config/database");
const fs = require("fs");
const discord = require('../../utils/bot');
module.exports = {
    // Using @id and uuid to generate different id. It needs to add 1 more column to the file.
    createFromCSV: callBack => {
      // Using read files to catch all the name and csv file in Aldi folder.
      const folder = "d:/Project/DP2/supermarket-Backend/Aldi/";
      
      fs.readdir(folder, (err, files) => {
        Array.from(files).forEach(file =>{
          switch (file) {
            case "data.csv":
              pool.query(
                `LOAD DATA LOCAL INFILE 'd:/Project/DP2/supermarket-Backend/Aldi/data.csv'
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
            case "Baby_food.csv":
              pool.query(
                `LOAD DATA LOCAL INFILE 'd:/Project/DP2/supermarket-Backend/Aldi/Baby_food.csv'
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
                `LOAD DATA LOCAL INFILE 'd:/Project/DP2/supermarket-Backend/Aldi/Beauty.csv'
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
                `LOAD DATA LOCAL INFILE 'd:/Project/DP2/supermarket-Backend/Aldi/Beer__Cider.csv'
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
                `LOAD DATA LOCAL INFILE 'd:/Project/DP2/supermarket-Backend/Aldi/Champagne__Sparkling.csv'
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
                `LOAD DATA LOCAL INFILE 'd:/Project/DP2/supermarket-Backend/Aldi/Chocolate.csv'
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
                `LOAD DATA LOCAL INFILE 'd:/Project/DP2/supermarket-Backend/Aldi/Coffee.csv'
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
                `LOAD DATA LOCAL INFILE 'd:/Project/DP2/supermarket-Backend/Aldi/Dairy__Eggs.csv'
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
                `LOAD DATA LOCAL INFILE 'd:/Project/DP2/supermarket-Backend/Aldi/Freezer.csv'
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
                `LOAD DATA LOCAL INFILE 'd:/Project/DP2/supermarket-Backend/Aldi/Gluten_Free.csv'
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
                `LOAD DATA LOCAL INFILE 'd:/Project/DP2/supermarket-Backend/Aldi/Health.csv'
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
                `LOAD DATA LOCAL INFILE 'd:/Project/DP2/supermarket-Backend/Aldi/Household.csv'
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
                `LOAD DATA LOCAL INFILE 'd:/Project/DP2/supermarket-Backend/Aldi/Just_Organic.csv'
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
                `LOAD DATA LOCAL INFILE 'd:/Project/DP2/supermarket-Backend/Aldi/Laundry.csv'
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
                `LOAD DATA LOCAL INFILE 'd:/Project/DP2/supermarket-Backend/Aldi/Nappies_and_wipes.csv'
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
                `LOAD DATA LOCAL INFILE 'd:/Project/DP2/supermarket-Backend/Aldi/Olive_Oil.csv'
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
                `LOAD DATA LOCAL INFILE 'd:/Project/DP2/supermarket-Backend/Aldi/Spirits.csv'
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
                `LOAD DATA LOCAL INFILE 'd:/Project/DP2/supermarket-Backend/Aldi/Super_Savers.csv'
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
                `LOAD DATA LOCAL INFILE 'd:/Project/DP2/supermarket-Backend/Aldi/Wine.csv'
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

    const folder1 = "d:/Project/DP2/supermarket-Backend/Woolies/";
      
      fs.readdir(folder1, (err, files) => {
        Array.from(files).forEach(file =>{
          switch (file) {
            case "baby.csv":
              pool.query(
                `LOAD DATA LOCAL INFILE 'd:/Project/DP2/supermarket-Backend/Woolies/baby.csv'
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
            case "bakery.csv":
              pool.query(
                `LOAD DATA LOCAL INFILE 'd:/Project/DP2/supermarket-Backend/Woolies/bakery.csv'
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
            case "dairy_eggs_fridge.csv":
              pool.query(
                `LOAD DATA LOCAL INFILE 'd:/Project/DP2/supermarket-Backend/Woolies/dairy_eggs_fridge.csv'
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
            case "drinks.csv":
              pool.query(
                `LOAD DATA LOCAL INFILE 'd:/Project/DP2/supermarket-Backend/Woolies/drinks.csv'
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
            case "freezer.csv":
              pool.query(
                `LOAD DATA LOCAL INFILE 'd:/Project/DP2/supermarket-Backend/Woolies/freezer.csv'
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
            case "fruit_veg.csv":
              pool.query(
                `LOAD DATA LOCAL INFILE 'd:/Project/DP2/supermarket-Backend/Woolies/fruit_veg.csv'
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
            case "health_beauty.csv":
              pool.query(
                `LOAD DATA LOCAL INFILE 'd:/Project/DP2/supermarket-Backend/Woolies/health_beauty.csv'
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
            case "household.csv":
              pool.query(
                `LOAD DATA LOCAL INFILE 'd:/Project/DP2/supermarket-Backend/Woolies/household.csv'
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
            case "liquor.csv":
              pool.query(
                `LOAD DATA LOCAL INFILE 'd:/Project/DP2/supermarket-Backend/Woolies/liquor.csv'
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
            case "lunch_box.csv":
              pool.query(
                `LOAD DATA LOCAL INFILE 'd:/Project/DP2/supermarket-Backend/Woolies/lunch_box.csv'
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
            case "meat_seafood_deli.csv":
              pool.query(
                `LOAD DATA LOCAL INFILE 'd:/Project/DP2/supermarket-Backend/Woolies/meat_seafood_deli.csv'
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
            case "pantry.csv":
              pool.query( 
                `LOAD DATA LOCAL INFILE 'd:/Project/DP2/supermarket-Backend/Woolies/pantry.csv'
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
            case "pet.csv":
              pool.query(
                `LOAD DATA LOCAL INFILE 'd:/Project/DP2/supermarket-Backend/Woolies/pet.csv'
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
      
    },
  // search for a product by its keyword
    searchProduct: (keyword, callBack) => {
      var startTime = Date.now();
      // Return the require information followed contract.json
      const query = 
      `(SELECT product_name,price,product_url,img_url,supermarket 
        FROM products_test
        WHERE product_name 
        LIKE CONCAT(CONCAT('%',?),'%')
        AND price != ""
        AND supermarket = "Woolworths Supermarket"
        ORDER BY price
        LIMIT 10)
      UNION
      (SELECT product_name,price,product_url,img_url,supermarket 
        FROM products_test
        WHERE product_name 
        LIKE CONCAT(CONCAT('%',?),'%')
        AND price != ""
        AND supermarket != "Woolworths Supermarket"
        ORDER BY price
        LIMIT 10)`;
      // If a line must satisfy all of multiple requirements, we need to use lookahead. ^(?=.*?\bone\b)(?=.*?\btwo\b)(?=.*?\bthree\b).*$
      // matches a complete line of text that contains all of the words “one”, “two” and “three”.
      // UNION 
      // (SELECT product_name,price,product_url,img_url 
      // FROM products_test
      // WHERE price IS NOT NULL
      // ORDER BY price)
      pool.query(query
      ,
      [
        keyword, keyword
      ],
      (error, results) => {
        if (error) {
           callBack(error);
        }
        let aldiItems =[];
        let wooliesItems =[];
        Array.from(results).forEach( element =>
          {
          if (element.supermarket == "Woolworths Supermarket") {
          wooliesItems.push(element);
          }
          else
          {
            aldiItems.push(element);
          }
        }
        )
        // Add two lists into 1 json file according to the contract.
        var finalList = { "woolies":[],"aldi":[]};
        finalList.woolies = wooliesItems;
        finalList.aldi = aldiItems;
        var endTime = Date.now();
        var timeDiff = endTime - startTime;
        if (timeDiff > 700) {
          discord.sendMessage(`Backend - Time taken to search and filter products using keyword "${keyword}": ${timeDiff}ms`);
        }
        return callBack(null, finalList);
      }
    );
  },
/**
  // get the 10 values from Aldi 
  getAldi: (keyword) =>{
    // Return the require information followed contract.json
    const Aldiquery = 
    `SELECT product_name,price,product_url,img_url,supermarket 
      FROM products_test
      WHERE product_name 
      LIKE CONCAT(CONCAT('%',?),'%')
      OR WHERE product_url
      LIKE CONCAT(CONCAT('%',?),'%')
      AND price != ""
      AND supermarket != "Woolworths Supermarket"
      ORDER BY price
      LIMIT 10`;
    pool.query(Aldiquery
    ,
    [
      keyword, keyword
    ],
    (error, results) => {
      if (error) {
         callBack(error);
      }
      // Looping all items in the return data from DB and filter woolies/aldi items.
      let aldiItems =[];
      Array.from(results).forEach( element =>
        {
          aldiItems.push(element);
        }
      )
    }
  );
  return aldiItems;
  },

  **/
  // return all products with all the information (all columns).
  getProducts: (callBack) => {
    pool.query(`select * from products_test`, (error, results) => {
      if (error) callBack(error);
      return callBack(null, results);
    });
  },
  deleteProducts: (callBack) => {
    pool.query(`delete from products_test`, (error, results) => {
      if (error) callBack(error);
      return callBack(null, results);
    });
  },
};
