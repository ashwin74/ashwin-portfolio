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
