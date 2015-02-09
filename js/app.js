var $ = require('jquery');
var tengwar = require('tengwar/general-use');
var fonts = require("tengwar/fonts");

var init_translation = function () {
  var focus = $(document.activeElement)[0];
  $('.translation-source').each(function () {
    translate(this, focus);
  });
};

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
  init_translation();
});

$(function () {
  $('.translation-source').focus();
  if ($('.translation-source').hasClass('translate-on-load')) {
    console.log('translate on load');
    init_translation();
  }
});