import express from "express";

const app = express(); // Create an instance of express

const PORT = process.env.PORT || 4000; // Set the port to either the environment variable PORT or 4000
// Start the server and listen on the specified port

app.use(express.json()); // 🔑 This line is required to parse JSON body // This is a Global Middleware and gets applied to all routes handeled by the app

const reqlogger = (req, res, next) => {
  console.log(`${req.method} ${req.url} ${new Date().toISOString()}`);
  next();
}; // This is a custom middleware function that logs the request method, URL, and timestamp

app.use(reqlogger); // Apply the custom middleware to all routes handled by the app
// If we dont want to apply it to all the requests just remove this code line and then call it with the particaular request only as done below in one request

app.get("/", (req, res) => {
  res.send("This is the main server and is a GET call"); // Responds to GET requests at the root URL
});

app.get("/hello", (req, res) => {
  res.status(200).json({ Message: "This is the HELLO route of the server" }); // Responds to GET requests at /hello with a JSON object
});

app.get("/health", reqlogger, (req, res) => {
  console.log(req.query);

  res.send("The server is HEALTHY"); // Responds to GET requests at /health with a health status message
});

// Here if we want the middleware we created above to be applied to this request only or for few requests only we can chain them in the request only in the parameters only but we have to make sure to disable it at the top where its applied using the use keyword

app.post("/api/users", (req, res) => {
  console.log("Name:", req.body.name); // Logs the name from the request body

  res.json({ Message: "Recieved the name from the request body" });
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`)); // This will log a message to the console when the server starts
