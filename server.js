const express = require("express");
const path = require("path");
const routes = require("./controllers");
const exphbs = require("express-handlebars");
const sequelize = require("./config/connections");
const router = require("./controllers");

const bodyParser = require('body-parser');

const loginPlus = new (require('login-plus').Manager);


const PORT = process.env.PORT || 3001;

const app = express();

const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.use(router);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}...`));
});

router.get("/", async (req, res) => {});

loginPlus.init(app,{ successRedirect:'/index'});

loginPlus.setValidator(
  function(username, password, done) {
    if(username === 'admin' && password === 'secret.pass') {
      done(null, {username: 'admin', when: Date()});
    } else {
      done('username or password error');
    }
  }
);

app.get('user-info', function(req, res) {
  res.end(
    'user: '+req.session.passport.username+
    ' logged since '+req.session.passport.when
  );
});
