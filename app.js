const express = require("express");
const path = require("path");
const navigation = require("./routes");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(navigation);

app.listen(3030);
