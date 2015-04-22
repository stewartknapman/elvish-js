var $ = require('jquery');
var tengwar = require('tengwar/general-use');
var fonts = require('tengwar/fonts');

var ElvishTranslator = function (translation_source) {
  this.translation_source = $(translation_source);
  
  this.add_event_listeners();
  this.init_translation();
};

ElvishTranslator.prototype.get_focused = function () {
  return $(document.activeElement)[0];
};

ElvishTranslator.prototype.add_event_listeners = function () {
  var _this = this;
  $(document).on('keyup', function(e){
    _this.translate();
  });
};

ElvishTranslator.prototype.init_translation = function () {
  if (this.translation_source.hasClass('translate-on-load') && this.translation_source.val() !== '') {
    this.translation_source.focus();
    this.translate();
  }
};

ElvishTranslator.prototype.translate = function () {
  var focus = this.get_focused();
  if(focus === this.translation_source[0]){
    var target = this.translation_source.data('target');
    var $target = $(target).first();
    var text = this.translation_source.val();
    
    var elvish = tengwar.transcribe(text, {
      font: fonts.annatar,
      noAchLaut: true,
      language: 'english'
    });
    
    $target.html(elvish);
  }
};

$(function () {
  $('.translation-source').each(function () {
    new ElvishTranslator(this);
  });
});