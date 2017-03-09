var $ = require('jquery');
$(function () {
    $('.js-menu').click(function () {
        $(this).toggleClass('in');
    });
})