

/*CART UPDATER*/
$(function() {

  "use strict"
  
  var init = "0";
  var counter = 0;

  // Initial Cart
  $(".count").html(init);
  
  // Add Items To Basket
  function addToBasket() {
    counter++;
    $(".count").html(counter).animate({
      'opacity' : '0'
    },0, function() {
      $(".count").animate({
        'opacity' : '1'
      })
    })
  }

  // Add To Basket Animation
  $(".button-light , .button-light1").on("click", function() {
    addToBasket(); $(this).parent().parent().find(".product_overlay").css({
      'transform': ' translateY(0px)',
      'opacity': '1',
      
    }).queue(function() {
      $(this).css({
        'transform': 'translateY(-500px)',
        'opacity': '0',
       
      }).dequeue();
    });
  });
});



/*PAGINATION ACTIVE LINK*/
$(document).ready(function() {
var pageItem = $(".sneaker__pages span").not(".next");
var next = $(".sneaker__pages span.next");

pageItem.click(function() {
  pageItem.removeClass("activepage");
  $(this).not(".next").addClass("activepage");
});

next.click(function() {
  $("span.activepage").removeClass("activepage").next().addClass("activepage");
});

});



$(function() {
  $('.boxblack').delay(500).show().fadeOut('slow');
});