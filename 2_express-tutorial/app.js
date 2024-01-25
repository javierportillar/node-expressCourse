// // const http = require("http");
// // const { readFileSync } = require("fs");

// // // get all files
// // const homePage = readFileSync("./navbar-app/index.html");
// // const homeStyles = readFileSync("./navbar-app/styles.css");
// // const homeImage = readFileSync("./navbar-app/logo.svg");
// // const homeLogic = readFileSync("./navbar-app/browser-app.js");

// // const server = http.createServer((req, res) => {
// //   const url = req.url;
// //   console.log(url);
// //   // Home Page
// //   if (url === "/") {
// //     res.writeHead(200, { "Content-Type": "text/html" });
// //     res.write(homePage);
// //     res.end();
// //   }
// //   // About Page
// //   else if (url === "/about") {
// //     res.writeHead(200, { "Content-Type": "text/html" });
// //     res.write("<h1>About Page</h1>");
// //     res.end();
// //   }
// //   // Styles
// //   else if (url === "/styles.css") {
// //     res.writeHead(200, { "Content-Type": "text/css" });
// //     res.write(homeStyles);
// //     res.end();
// //   }
// //   // Image
// //   else if (url === "/logo.svg") {
// //     res.writeHead(200, { "Content-Type": "image/svg+xml" });
// //     res.write(homeImage);
// //     res.end();
// //   }
// //   // Logic
// //   else if (url === "/browser-app.js") {
// //     res.writeHead(200, { "Content-Type": "text/javascript" });
// //     res.write(homeLogic);
// //     res.end();
// //   }

// //   // 404
// //   else {
// //     res.writeHead(404, { "Content-Type": "text/html" });
// //     res.write("<h1>Page not found</h1>");
// //     res.end();
// //   }
// // });

// // server.listen(4000);

// // app.get("/", (req, res) => {
// //   console.log("User hit HOME"); // log to console
// //   res.status(200).send("Home Page"); // send response
// // }); // route

// // app.get("/about", (req, res) => {
// //   console.log(req.url);
// //   res.status(200).send("About Page");
// // }); // route

// // app.all('*', (req, res) => {
// //   res.status(404).send("<h1>Resource not found</h1>");
// // }
// // ); // 404

// // app.listen(4000, () => {
// //   console.log("Server running on port 4000");
// // }); // listen to port 4000
// const { products, people } = require("./data");
// const express = require("express"); // import express
// const app = express(); // creates an express application
// const path = require("path"); // import path

// //App.use configura estaticamente y middleware
// // app.use(express.static("./public")); // serve static assets

// app.get("/", (req, res) => {
//   console.log(req.url);
//   // res.json(products);
//   res.send("<h1>Home Page</h1> <a href='/api/products'>products</a>");
// });

// app.get("/api/products", (req, res) => {
//   const newProducts = products.map((product) => {
//     const { id, name, image } = product;
//     return { id, name, image };
//   });
//   res.json(newProducts);
// });

// app.get("/api/products/:productID", (req, res) => {
//   // console.log(req);
//   console.log(req.params);
//   const { productID } = req.params;
//   const singleProduct = products.find(
//     (product) => product.id === Number(productID)
//   );
//   if (!singleProduct) {
//     // si no existe el producto
//     return res.status(404).send("Product does not exist");
//   }
//   res.json(singleProduct);
// });

// app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
//   console.log(req.params);
//   res.send("Hello World");
// });

// app.get("/api/v1/query", (req, res) => {
//   const { search, limit } = req.query;
//   let sortedProducts = [...products];
//   console.log(req.query);
//   if (search) {
//     sortedProducts = sortedProducts.filter((product) => {
//       return product.name.startsWith(search);
//     });
//   }
//   if (limit) {
//     sortedProducts = sortedProducts.slice(0, Number(limit));
//   }
//   if (sortedProducts.length < 1) {
//     // si no existe el producto
//     // return res.status(200).send("No products matched your search");
//     return res.status(200).json({ success: true, data: [] });
//   }
//   res.status(200).json(sortedProducts);
// });

// app.all("*", (req, res) => {
//   res.status(404).send("<h1>Resource not found</h1>");
// });

// app.listen(4000, () => {
//   // listen to port 4000
//   console.log("Server running on port 4000");
// });
// const logger = require("./logger");
// const authorize = require("./authorize");
// const express = require("express");
// const morgan = require("morgan");

// const app = express(); // creates an express application

// app.use(morgan("tiny"));
// // app.use(logger,authorize); // middleware
// // req => middleware => res
// //Home route y about route

// app.get("/", (req, res) => {
//   res.status(200).send("Home Page");
// });

// app.get("/about", (req, res) => {
//   res.status(200).send("About Page");
// });

// app.get("/api/products", authorize,(req, res) => {
//   res.status(200).send("Products Page");
// });
// app.get("/api/items", logger, authorize ,(req, res) => {
//   console.log(req.user);
//   res.status(200).send("ITEMS Page");
// });

// app.listen(4000, () => {
//   console.log("Server is listening on port 4000...");
// });

const express = require("express");
const app = express();
const { people } = require("./data");

//MIDDLEWARE
//statick assets
app.use(express.static("./methods-public"));
//parse form data
app.use(express.urlencoded({ extended: false }));
//parse json
app.use(express.json());

//Get method
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).json({ success: true, person: name });
});

app.post('/api/people',(req,res)=>{
  const {name} = req.body;
  if(!name){
    return res.status(400).json({success:false,msg:'please provide name value'})
  }
  res.status(201).json({success:true,data:[...people,name]})
})

//Post method
app.post("/login", (req, res) => {
  res.status(201).send("success");
});

//Put method
app.put('/api/postman/people/:id',(req,res)=>{
  const {id} = req.params;
  const {name} = req.body;
  const person = people.find((person)=>person.id === Number(id));
  if(!person){
    return res.status(400).json({success:false,msg:'please provide name value'})
  }
  const newPeople = people.map((person)=>{
    if(person.id === Number(id)){
      person.name = name;
    }
    return person;
  })
  res.status(200).json({success:true,data:newPeople})
})

app.listen(4000, () => {
  console.log("Server is listening on port 4000...");
});
