console.log('elvishJS:', 1);
var $ = require('jquery');
console.log('elvishJS:', 2);
var tengwar = require('tengwar/general-use');
console.log('elvishJS:', 3);
var fonts = require("tengwar/fonts");
console.log('elvishJS:', 4);

$(document).on('keyup', function(e){
  console.log('elvishJS:', 9);
  var $focus = $(document.activeElement);
  console.log('elvishJS:', 10);
  var $source = $('.translation-source');
  console.log('elvishJS:', 11);
  
  if($focus[0] === $source[0]){
    console.log('elvishJS:', 12);
    var target = $source.data('target');
    console.log('elvishJS:', 13);
    var $target = $(target);
    console.log('elvishJS:', 14);
    var text = $source.val();
    console.log('elvishJS:', 15);
    console.log('Elvish input:', text);
    
    var elvish = tengwar.transcribe(text, {
      font: fonts.annatar,
      noAchLaut: true,
      language: null
    });
    console.log('elvishJS:', 16);
    console.log('Elvish output:', elvish);
    
    $target.html(elvish);
    console.log('elvishJS:', 17);
  }
});

console.log('elvishJS:', 5);
$(function () {
  console.log('elvishJS:', 7);
  $('.translation-source').focus();
  console.log('elvishJS:', 8);
});
console.log('elvishJS:', 6);