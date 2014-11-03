var $ = require('jquery');
var tengwar = require('tengwar/general-use');
var fonts = require("tengwar/fonts");

$(document).on('keyup', function(e){
  var $focus = $(document.activeElement);
  var $source = $('.translation-source');
  
  if($focus[0] === $source[0]){
    var target = $source.data('target');
    var $target = $(target);
    var text = $source.val();
    console.log('Elvish input:', text);
    
    var elvish = tengwar.transcribe(text, {
      font: fonts.annatar,
      noAchLaut: true,
      language: null
    });
    console.log('Elvish output:', elvish);
    
    $target.html(elvish);
  }
});

$(function () {
  $('.translation-source').focus();
});