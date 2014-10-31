$(document).on('keyup', function(e){
  var $focus = $(document.activeElement);
  var $source = $('.translation-source');
  
  if($focus[0] === $source[0]){
    var target = $source.data('target');
    var $target = $(target);
    var new_text = $source.val();
    $target.text(new_text);
  }
  
});