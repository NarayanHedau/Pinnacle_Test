const express = require("express");
const bodyParser = require("body-parser");
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();
const PORT = 3000;

// Set view engine
app.set("view engine", "ejs");

// Middleware
app.use(bodyParser.json());
app.use(express.static("public"));

// Routes
app.use("/", employeeRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
