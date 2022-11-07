const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("Node_schema", "root", "y", {
  dialect: "mysql",
  host: "localhost",
});
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

module.exports = sequelize;
