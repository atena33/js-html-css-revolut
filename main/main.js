$ (document).ready(function(){

  $ ('.menu').click(
    function () {
      $ ('.column').fadeOut();
      $ (this).children('.column').toggle();
   }
  );
  // hamburger-menu

  var menu = $(".hamburger-menu").hide();
  var icona = $(".fa-bars").show();
  var close = $('.fa-times').hide();

  icona.click(
    function(){
      menu.show();
      close.show();
      icona.hide();
    }
  )
  // se cliccko che è già visibile, invece scompare.

  close.click (
    function () {
      icona.show();
      menu.hide();
      close.hide();
    }
  )
});
