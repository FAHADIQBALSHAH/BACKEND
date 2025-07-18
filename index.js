import express from "express";

const app = express(); // Create an instance of express

const PORT = process.env.PORT || 4000; // Set the port to either the environment variable PORT or 4000
// Start the server and listen on the specified port

// This is a Global Middleware and gets applied to all routes handeled by the app
app.use(express.json()); // 🔑 This line is required to parse JSON body

app.get("/", (req, res) => {
  res.send("This is the main server and is a GET call"); // Responds to GET requests at the root URL
});
app.get("/hello", (req, res) => {
  res.status(200).json({ Message: "This is the HELLO route of the server" }); // Responds to GET requests at /hello with a JSON object
});

app.get("/health", (req, res) => {
  console.log(req.query);

  res.send("The server is HEALTHY"); // Responds to GET requests at /health with a health status message
});

app.post("/api/users", (req, res) => {
  console.log("Name:", req.body.name); // Logs the name from the request body

  res.json({ Message: "Recieved the name from the request body" });
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`)); // This will log a message to the console when the server starts
