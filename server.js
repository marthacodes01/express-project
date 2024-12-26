const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");

// Middleware to verify the time of the request
app.use((req, res, next) => {
  const currentHour = new Date().getHours();
  if (currentHour < 9 || currentHour > 17) {
    console.log("Request made outside business hours");
  }
  next();
});

// Serve static files like CSS
app.use(express.static(path.join(__dirname, "public")));

// Route to render home page
app.get("/", (req, res) => {
  res.render("index");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
