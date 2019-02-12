$(document).ready(function() {
//Preloader
$(window).on("load", function() {
preloaderFadeOutTime = 500;
function hidePreloader() {
var preloader = $('.spinner-wrapper');
preloader.fadeOut(preloaderFadeOutTime);
}
hidePreloader();
});
});

//Type Effect
$(document).ready(function(){
  var typed = new Typed('#typed',{
  stringsElement: '#typed-strings',
  backSpeed: 70,
  typeSpeed: 70,
  loop: true,
  shuffle: true
  });
})

//SideNav
var elem = document.querySelector('.sidenav');
var instance = M.Sidenav.init(elem, {
    onOpenStart: function () {
        console.log("I trigger as soon as the page is loaded");
    },
    onCloseEnd: function () {
        console.log("same");
    }
});

//Floating button
$(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
  });

//tooltip
$(document).ready(function(){
    $('.tooltipped').tooltip();
  });

//material boxed - media
$(document).ready(function(){
    $('.materialboxed').materialbox();
  });

//Scroll Top
$(document).ready(function(){

  $(window).scroll(function(){
    if($(this).scrollTop() > 40){
      $('#topBtn').fadeIn();
    } else{
      $('#topBtn').fadeOut();
    }
  });
  $("#topBtn").click(function(){
    $('html, body').animate({scrollTop : 0},100);
  });
});
