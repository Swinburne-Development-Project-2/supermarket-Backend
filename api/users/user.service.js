const pool = require("../../config/database");
const fs = require("fs");
const fastcsv = require("fast-csv");
module.exports = {
  // Create a product is not necessary. It is commented to use its template.

  // createAProduct: (data, callBack) => {
  //   pool.query(
  //     `insert into products_test(supermarket,category,product_name,product_id,price,cup_price,product_url,img_url,viewed_date,ratings,rating_count,product_specials,available_in_stock)
  //                     values(?,?,?,?,?,?,?,?,?,?,?,?,?)`,
  //     [
  //       data.supermarket,
  //       data.category,
  //       data.product_name,
  //       data.product_id,
  //       data.price,
  //       data.cup_price,
  //       data.product_url,
  //       data.img_url,
  //       data.viewed_date,
  //       data.ratings,
  //       data.rating_count,
  //       data.product_specials,
  //       data.available_in_stock,
  //     ],
  //     (error, results) => {
  //       if (error) {
  //         return callBack(error);
  //       }
  //       return callBack(null, results);
  //     }
  //   );
  // },

  // Using @id and uuid to generate different id. It needs to add 1 more column to the file.
  createFromCSV: (callBack) => {


    // Creating a readstream from csv file and using fast-csv module to parse the data
    let stream = fs.createReadStream("D:\Github\DP2\supermarket-Backend\Woolies\lunch_box.csv");
    let csvData = [];
    let csvStream = fastcsv
        .parse()
        .on("data", function(data){
          csvData.push(data);
        })
        .on("end", function(){
          csvData.shift();
        });
    
        let query =
          "INSERT INTO products_test (id,supermarket,category,product_name,product_id,price,cup_price,product_url,img_url,viewed_date,ratings,rating_count,product_specials,available_in_stock) VALUES ?";
          pool.query(query, [csvData], (error, response) => {
        
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          });
          stream.pipe(csvStream);
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
