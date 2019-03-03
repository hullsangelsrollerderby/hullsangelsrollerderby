import $ from 'jquery';
import 'what-input';


// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');


// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

var wrap = $("#js-masthead");

$(function(){
  $(window).scroll(function(){
    var aTop = 10;
    if($(this).scrollTop()>=aTop){
      wrap.addClass("fix-menu");
    }
    else {
      wrap.removeClass("fix-menu");
    }
  });
});

$(function(){
  $(".teams--image").hover(
    function(){      
      swapimage($(this), '.jpg', '-fun.jpg');
    }, 
    function() {
      swapimage($(this), '-fun.jpg', '.jpg');
    });    
});

function swapimage(item, from, to) {
  if ($(item).data("swap") == true) {
    $(item).attr('src',$(item).attr('src').replace(from, to));
  }
}
