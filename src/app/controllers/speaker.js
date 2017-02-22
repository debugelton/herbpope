'use strict';
var express      = require('express');
var router       = express.Router();

module.exports = function (app) {
  app.use('/', router);
};

router.get('/speaker', function (req, res, next) {
    res.render('speaker', {title: 'speaker'});
});