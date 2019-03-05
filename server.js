const express = require("express");
const Sequelize = require("sequelize");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const todos = require("./routes/api/todos");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());

var config = {}

console.log("PROCESS ENV IS ", process.env.NODE_ENV);
// DB Config
if(process.env.DB_ENV == 'docker')
  config = require("./config/config").docker;
else
  config = require("./config/config").development;

const sequelize = new Sequelize(config);

// Connect to MySQL
sequelize
  .authenticate()
  .then(() => console.log("MySQL DB successfully connected"))
  .catch(err => console.error("Error in connecting to MySQL DB", err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api/todos", todos);

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if sd choose to deploy the app there

app.listen(port, () => console.log(`Server up and running!`));
