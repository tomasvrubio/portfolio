$(document).ready(function() {
  $('#knowledge').find('.cabecera').on('click', function(e){
    e.preventDefault();
  });

  $('.cabecera').on('click', function(){
    var extra = $(this).parent().find('.extra');
    
    if (extra.hasClass('hide')) {
      $('.extra:not(.hide)').toggleClass('hide');
      $('.flecha-gira').toggleClass('flecha-gira');
    }
    
    $(this).find('.flecha').toggleClass('flecha-gira');
    extra.toggleClass('hide');
  });
});