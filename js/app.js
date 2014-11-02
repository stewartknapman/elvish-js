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
    
    var elvish = tengwar.transcribe(text, {
      font: fonts['annatar'],
      language: null
    });
    
    $target.html(elvish);
  }
});

$(function () {
  $('.translation-source').focus();
});