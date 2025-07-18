const express = require("express");
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// TYPES OF REQUESTS IN BACKEND

//Get request
app.get("/", (req, res) => {
  // res.send("This is a GET Request");
  res.sendFile("/routing/dummy.html", { root: __dirname });
});

app.post("/items", (req, res) => {
  // res.send("This is a POST Request");
  res.json({ name: "FAHAD", age: 24, city: "BANGALORE" });
});

app.put("/items/:id", (req, res) => {
  res.send("This is a PUT request");
});

app.delete("/items/:id", (req, res) => {
  res.send("This is a DELETE request");
});

app.listen(port, () => {
  console.log(`This Application is listening on port ${port}`);
});
