var path = require("path");
var db = require("../models");

module.exports = function (app) {
  app.get("/", function (req, res) {
    db.Article.find({ saved: false }).then(function (dbArticles) {
        console.log(dbArticles);
        res.render("index", { articles: dbArticles });
      });
  });

  app.get("/savedArticles", function (req, res) {
    db.Article.find({ saved: true }).then(function (dbArticles) {
        console.log(dbArticles);
        res.render("savedArticles", { articles: dbArticles });
    })
  });
};