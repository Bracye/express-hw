// const express = require("express");
// const app = express();
// const port = 5000;

// const plants = [
//   "Monstera Deliciosa",
//   "Corpse Flower",
//   "Elephant-Foot Yam",
//   "Witches' Butter",
// ];

// app.get("/awesome", (req, res) => {
//   //this will never be reached
//   res.send(`
//         <h1>Plants are awesome!</h1>
//         <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
//       `);
// });

// app.get("/:id", (req, res) => {
//   if (plants[req.params.id]) {
//     res.send(plants[req.params.id]);
//   } else {
//     res.send(`cannot find anything at this index: ${req.params.id}`);
//   }
// });

// app.listen(port, () => {
//   console.log(`listening on port , ${port}`);
// });

const express = require("express");
const app = express();
const port = 5000;

app.get("/greeting", (req, res) => {
  res.send("<h1> Hello Stranger! <h1>");
});

app.get("/greeting/:name", (req, res) => {
  res.send(`<h1> Hello, ${req.params.name}! It's so great to see you! </h1>`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
