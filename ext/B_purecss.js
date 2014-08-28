B(window).on('load',function() {
  // Handle PureCSS menu/submenu
  // It currently expects:
  //  * menu needs class .menu-with-dropdown
  //  * submenu to have the .submenu class.
  B('.menu-with-dropdown').on('click',function(){
    var B_t = B(this),
        B_sub = B(B_t.firstChild('.submenu'));
    if(B_sub.css('visibility') == 'visible') {
      B_sub.css({
        'visibility':'hidden',
        'position':'absolute',
        'top':'-10000px',
        'left':'-10000px'
      });
      B(B_t.firstChild('.fa-toggle-up')).removeClass('fa-toggle-up').addClass('fa-toggle-down');
    } else {
      B_sub.css({
        'visibility':'visible',
        'position':'relative',
        'top':'0',
        'left':'0',
        'border':'1px solid #AAA',
        'border-radius':'4px'
      });
      B(B_t.firstChild('.fa-toggle-down')).removeClass('fa-toggle-down').addClass('fa-toggle-up');
    }
  });
});
