const express = require("express");
const path = require("path");
const routes = require("./controllers");
const exphbs = require("express-handlebars");
const sequelize = require("./config/connections");
const router = require("./controllers");

const PORT = process.env.PORT || 3001;

const app = express();

const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});

router.get("/", async (req, res) => {});

Handlebars.registerHelper("list", function (items, options) {
  const itemsAsHtml = items.map((item) => "<h1>Hello world</h1>");
  return itemsAsHtml.join("\n");
});
