const express = require('express');
const app = express();
const bodyParser = require("body-parser");


//const categoryRoute = require("./routes/cateRoute");
//const productRoute = require("./routes/prodRoute");
//const cartRoute = require("./routes/cartRoute");
//const adminRoute = require("./routes/adminRoute");
const userRoute = require('./routers/userRoute');


// Use body parser middleware to parse body of incoming requests
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes which should handle request
//app.use("/product", productRoute);
//app.use("/category", categoryRoute);
//app.use("/cart", cartRoute);
//app.use("/admin", adminRoute);
app.use('/user', userRoute);


app.get("/", (req, res) => {
    res.send('API IS NOW WORKING, append "/docs" to the current url to access API documentation');
  });
  
  // Handle Error Requests
  app.use((req, res, next) => {
    const error = new Error();
    error.message = "Not Found";
    error.status = 404;
    next(error);
  });
  
  app.use((error, req, res, next) => {
    res.status(error.status || 500).json({ error: error });
  });

module.exports = app;