/*************
  Common Functions
 *************/

// ISO Code: {{ currency.iso_code }}
// Name: {{ currency.name }}
// Symbol: {{ currency.symbol }}
var Shopify = Shopify || {};
var shop_currency = Shopify.currency;
var currency_rate = String(Shopify.currency['rate']);
//   console.log('currency_rate:'+currency_rate);
jQuery('header').attr('currency_rate', currency_rate);


function check_cart(currency_rate) {

  var rate = jQuery('header').attr('currency_rate');
  // console.log('rate'+rate);
  // check if cart eligible for free
  var sub_total = jQuery('.fw--cart span.total.money').text();
  //console.log(sub_total);
  var cart_total = sub_total.match(/\d+/)[0];
  var min_total = '85';
  if (cart_total >= 85 * rate) {
    jQuery('.fw--blocks.cart-content-free').css({
      'display': 'block'
    });
    jQuery('.hideaf').css({
      'display': 'block'
    });
    //       console.log('free' + cart_total + min_total);
  } else {
    jQuery('.fw--blocks.cart-content-free').css({
      'display': 'none'
    });
    $(".remove.31351148806186").trigger("click");
    $(".remove.31351148838954").trigger("click");
    $(".remove.31351148871722").trigger("click");
    //  console.log('Not free' + cart_total + min_total);
  }
  // 	alert("Working");
}

function checkitemcountcart() {
  jQuery.getJSON('/cart.js', function(cart) {

    let items = cart.items;

    for (var i = 0; i < items.length; i++) {
      var protitle = items[i].title;

      var str = protitle;
      var str_pos = str.indexOf("Williams");
      if (str_pos > -1) {
        //     var apnditem = parseInt($('.apendeditem').text());
        //      var newvall = ++apnditem;
        jQuery('#31351148806186').addClass('hidee');
        jQuery('#31351148838954').addClass('hidee');
        jQuery('#31351148871722').addClass('hidee');
        //     jQuery('.apendeditem').text(newvall);
        jQuery('.cart-content-free').hide();
        jQuery('.cart-content-free').addClass('hidee');

      } else {
        jQuery('.cart-content-free').removeClass('hidee');
        //alert('notexist');
      }
    }
  });
}

/*************
  Window On Load Scripts
 *************/
$(window).load(function() {
  checkitemcountcart();
  check_cart();

  // setInterval(function(){check_cart()}, 1000);
});

/*************
  Document Ready Load Scripts
 *************/
$(document).ready(function() {
  // Added for Size Swatches
  jQuery('.swatch :radio').change(function() {
    var optionIndex = jQuery(this).closest('.swatch').attr('data-option-index');
    var optionValue = jQuery(this).val();
    jQuery(this)
      .closest('form')
      .find('.single-option-selector')
      .eq(optionIndex)
      .val(optionValue)
      .trigger('change');
  });

  // Added for product tabs
  $('ul.tabs').each(function() {
    var active, content, links = $(this).find('a');
    active = links.first().addClass('active');
    content = $(active.attr('href'));
    links.not(':first').each(function() {
      $($(this).attr('href')).hide();
    });
    $(this).find('a').click(function(e) {
      active.removeClass('active');
      content.hide();
      active = $(this);
      content = $($(this).attr('href'));
      active.addClass('active');
      content.show();
      return false;
    });
  });

  $('.return-policy a').attr('target', '_blank');

  // Lightslider carousel on product pages
  $('#lightSlider').lightSlider({
    item: 4,
    autoWidth: false,
    slideMove: 1, // slidemove will be 1 if loop is true
    slideMargin: 10,
    useCSS: true,
    cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
    easing: 'linear', //'for jquery animation',////*
    slideEndAnimation: true,
    adaptiveHeight: true,
    speed: 100,
    loop: false,
    prevHtml: '<svg class="fw--icon fw--icon--chevron-left"> <use xlink:href="#fw--icon--chevron-left"></use> </svg>',
    nextHtml: '<svg class="fw--icon fw--icon--chevron-right"> <use xlink:href="#fw--icon--chevron-right"></use> </svg>',
    responsive: [{
        breakpoint: 1200,
        settings: {
          item: 4,
          slideMove: 1,
          slideMargin: 6,
          adaptiveHeight: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          item: 1,
          slideMove: 1,
          adaptiveHeight: false,
        }
      }
    ],
    //LAZY LOADING
    onBeforeStart: function(slider) {
      var screenWidth = $(window).width();

      var imgLimit = 2;
      if (screenWidth >= 480) {
        imgLimit = slider.find('.sliderimg').length;
      }
      for (var i = 1; i <= imgLimit; i++) {
        var img = slider.find('li:nth-child(' + i + ') img');
        img.attr('src', img.attr('data-src'));
      }
    },
    onSliderLoad: function(slider) {
      $('#lightSlider').removeClass('lightSlider--hidden-pre-load');
    },
    onAfterSlide: function(slider, scene) {
      for (var i = 0; i <= 1; i++) {
        var img = slider.find('img').eq(slider.getCurrentSlideCount() + i);
        img.attr('src', img.attr('data-src'));
      }
    }
  });

  //   $(".off-canvas--open").click(function(){
  //     $(".off-canvas--right-sidebar").toggle();
  //      $(window).scrollTop(0);
  //   });

  $('.limitwidth, .header--cart-count, .cart-link .modal--link').on("click", function() {
    $(window).scrollTop(0);
    $(".hiddenform").removeClass("hideform");
  });

  $('.shipping-guide-link, .sizing-guide-link').on("click", function() {
    $(".announcement--root").toggle();
    $(".layout--header").toggle();
    //           $(".color-selector").toggle();

  });



  $('.modal__close').on("click", function() {
    $(".announcement--root").toggle();
    $(".layout--header").toggle();
    //           $(".color-selector").toggle();

  });


  $('.showfilters').on("click", function() {
    $(".showfilters").toggle();
    $(".hidefilters").toggle();
    $(".filtersmain").toggle();
    //           $(".color-selector").toggle();

  });


  $('.hidefilters').on("click", function() {
    $(".showfilters").toggle();
    $(".hidefilters").toggle();
    $(".filtersmain").toggle();
    //           $(".color-selector").toggle();

  });

  $('.continue-shopping, .fsp__btn free-shipping-popup__later').on("click", function() {
    $(".modal--mask").click();

  });


  $('#free-shipping-popup__right-button').on("click", function() {
    $(".continue-shopping").click();

  });


  $('#free-shipping-popup__right-button').on("click", function() {
    $(".modal--mask").click();

  });




  $('header--search').on("click", function() {
    $(".hiddenwhitebar").toggle();

  });


  $('.needhelp').on("click", function() {
    $("iframe").contents().find(".button-display").addClass("appear");;
    //           $(".color-selector").toggle();

  });


  $('.soldout').bind('mouseup', function() {
    $(".hidden-notify").show();
    $(".arrow-size").removeClass('rotate-arrow');
    $(".arrow-color").removeClass('rotate-arrow');
  });
  $('.available').bind('mouseup', function() {
    $(".hidden-notify").hide();
    $("#esc-oos-form").hide();
    $(".close-form").hide();
  });


  //         $('.custom-notified-button').bind('mouseup', function() {
  //                   $("#esc-oos-form").toggle();
  //     $(".close-form").toggle();
  //     });


  $('.coloropen').bind('mouseup', function() {
    $(".arrow-size").removeClass('rotate-arrow');
  });

  $('.sizeopen').bind('mouseup', function() {
    $(".arrow-color").removeClass('rotate-arrow');
  });


  //         	$('.soldout').on("click",function(){
  // $(".hidden-notify").toggle();

  // 	});


  //       	$('.available').on("click",function(){
  // $(".hidden-notify").toggle();

  // 	});


  $(".return-policy-link").text("View our return policy");

  //     var $buyarea = $('.maxwidthdesktop').clone();
  //   	$('.buyareamain').html($buyarea);

  $(".img-influ").hover(
    function() {
      $(this).find(".inf-btn").fadeIn();
    },
    function() {
      $(this).find(".inf-btn").fadeOut(function() {})
    }
  );

  $(".instagram-media").hover(
    function() {
      $(this).find(".inf-btn").fadeIn(100);
    },
    function() {
      $(this).find(".inf-btn").fadeOut(function() {})
    }
  );

  //     $(".swatch-element .soldout label").each(function(index, element) {
  //     element.addEventListener('click', function() {
  //  $("hidden-notify").toggle();
  //     })

  // Initializing ajaxinate for infinite scrolling on collection pages
  // document.addEventListener("DOMContentLoaded", function() {
  //   var endlessScroll = new Ajaxinate();
  // });

  // For currency selector
  jQuery('[data-currency-selector]').on('change', function() {
    jQuery(this).parents('form').submit();
  });

  $('.ss').click(function() {
    $(window).scrollTop(0);
    $(".fixedbottom").hide();

  });
  $(".ssm").click(function() {
    $('body').addClass('search-active');
    //                  setTimeout(function () {
    //    $(".fixedbottom").hide();
    //     $(".fixedbottom").css( "display", "none");
    //   }, 1500);

  });

  $('.modal--mask').on('click', function() {
    $('body').removeClass('search-active');
  });

  $('.off-canvas--close').on('click', function() {
    $('body').removeClass('search-active');
  });
});
