const express = require("express");
const path = require("path");

const generalRoutes = require("./routes/general");
const usersRoutes = require("./routes/users");

const app = express();

//serving static files
app.use(express.static(path.join(__dirname, "public")));

app.use(generalRoutes);
app.use(usersRoutes);

//execute this function with every incoming request
app.listen(3000);
