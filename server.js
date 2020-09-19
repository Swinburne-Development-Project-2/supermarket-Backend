
//Getting the modules
const express = require("express");
const app = express();
// to make api calls 
const cors = required('cors'); 
// For our dot environmnet
const dotenv = required('dotenv');
dotenv.config();


//To Send data to our backend when we get data from our api
app.use(cors());
//To be able send it in Json format
app.use(express.json());
//To not send any form data
app.use(express.urlencoded({extended:false}));


const userRouter = require("./api/users/user.router");

app.use("/api/users", userRouter);
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("server up and running on PORT :" , port);
});
