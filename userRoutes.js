const express = require("express");
const Router = express.Router();
const UserQuery = require("./userQuery");

Router.route("/books")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader(
      "Content-Type",
      "application/json",
      "Access-Control-Request-Headers",
      "authorization"
    );
    next();
  })
  .get((req, res, next) => {
    UserQuery.showUser(req, res);
  })
  .post((req, res, next) => {
    UserQuery.insertUser(req, res);
  });

Router.route(`/:id`)
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    next();
  })
  .delete((req, res, next) => {
    UserQuery.delete(req, res);
  })
  .put((req, res, next) => {
    UserQuery.update(req, res);
  });

module.exports = Router;
