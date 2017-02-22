'use strict';
var express      = require('express');
var router       = express.Router();

module.exports = function (app) {
  app.use('/', router);
};

router.get('/biography', function (req, res, next) {
    res.render('biography', {title: 'biography'});
});