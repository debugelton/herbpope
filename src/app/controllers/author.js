'use strict';
var express      = require('express');
var router       = express.Router();

module.exports = function (app) {
  app.use('/', router);
};

router.get('/author', function (req, res, next) {
    res.render('author', {title: 'Author'});
});