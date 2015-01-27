var $ = require('jquery');
var tengwar = require('tengwar/general-use');
var fonts = require("tengwar/fonts");

var translate = function (source, focus) {
  if(focus === source){
    var $source = $(source);
    var target = $source.data('target');
    var $target = $(target);
    var text = $source.val();
    
    var elvish = tengwar.transcribe(text, {
      font: fonts.annatar,
      noAchLaut: true,
      language: null
    });
    
    $target.html(elvish);
  }
};

$(document).on('keyup', function(e){
  var focus = $(document.activeElement)[0];
  $('.translation-source').each(function () {
    translate(this, focus);
  });
});

$(function () {
  $('.translation-source').focus();
});