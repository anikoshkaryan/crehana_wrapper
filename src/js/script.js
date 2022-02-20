//*hamburger-menu part



$(document).on("click", ".hamburger-menu", function(){
    
    $('.mobile_version').fadeToggle();


  
});

$(document).on("click", ".mobile_close", function(){
  
    $('.mobile_version').fadeToggle();

  
});


// header's  search button's  and input's  functional part
$(document).on("click", ".search_btn", function(){
    $(".hidden_input").fadeToggle();
 })


 //first_swiper
 const swiper = new Swiper('#first_swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 23,
 
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      324: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      330: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      340: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      350: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      360: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      370: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      371: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      372: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      373: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      374: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      375: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      376: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      378: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      379: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      380: {
        slidesPerView:1,
        spaceBetween: 10
      },
      400: {
        slidesPerView:1,
        spaceBetween: 10
      },
      420: {
        slidesPerView:1,
        spaceBetween: 10
      },
      426: {
        slidesPerView: 1,
        spaceBetween: 10
      },
  
      430: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      440: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      450: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      460: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      470: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      500: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      600: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      601: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      627: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      628: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      700: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      699: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      700: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      801: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      
      800: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      802: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      
      805: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      
      810: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      
      820: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      
      840: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      
      860: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      
      880: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      943: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      944: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      
      900: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1120: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1130: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1140: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1150: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1152: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1155: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1157: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1158: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1160: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1170: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1180: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1170: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1180: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1190: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1200: {
        slidesPerView:3,
        spaceBetween: 20
      },
      1216: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1218: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1220: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1230: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1240: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1250: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1260: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1270: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1299: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1300: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1500: {
        slidesPerView: 4,
        spaceBetween: 14
      },
      1600: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1700: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1800: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1920: {
        slidesPerView: 4,
        spaceBetween: 10
      }
    }
  });

 //reviews_swiper
 const swipe_reviews = new Swiper('#reviews_swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


      //second_swiper
      const swiper_second = new Swiper('#second_swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 4,
        spaceBetween: 23,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          324: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          330: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          340: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          350: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          360: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          370: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          371: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          372: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          373: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          374: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          375: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          376: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          378: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          379: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          380: {
            slidesPerView:1,
            spaceBetween: 10
          },
          400: {
            slidesPerView:1,
            spaceBetween: 10
          },
          420: {
            slidesPerView:1,
            spaceBetween: 10
          },
          426: {
            slidesPerView: 1,
            spaceBetween: 10
          },
      
          430: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          440: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          450: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          460: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          470: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          500: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          600: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          601: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          627: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          628: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          699: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          801: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          
          800: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          802: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          
          805: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          
          810: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          
          820: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          
          840: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          
          860: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          
          880: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          943: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          944: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          
          900: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1100: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1120: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1130: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1140: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1150: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1152: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1155: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1157: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1158: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1160: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1170: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1170: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1190: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1200: {
            slidesPerView:3,
            spaceBetween: 20
          },
          1216: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1218: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1220: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1230: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1240: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1250: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1260: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1270: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1299: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1300: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1500: {
            slidesPerView: 4,
            spaceBetween: 14
          },
          1600: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1700: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1800: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1920: {
            slidesPerView: 4,
            spaceBetween: 10
          }
        }
      });
    



$(document).on("click", "#special_name1", function(){

    var data_id = $(this).data("id");
    $(".courses_name_second").removeClass("active")
    $(this).addClass("active");

    $(".hidden_slider").removeClass("open");
    $("#" + data_id).addClass("open");

 

})






$(document).on("click", "#special_name2", function(){

    var data_id = $(this).data("id");
    $(".courses_name").removeClass("active")
    $(this).addClass("active");

    $(".hidden_slider").removeClass("open");
    $("#" + data_id).addClass("open");

     //second_swiper
  const swiper_third = new Swiper('#third_swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 23,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      324: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      330: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      340: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      350: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      360: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      370: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      371: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      372: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      373: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      374: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      375: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      376: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      378: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      379: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      380: {
        slidesPerView:1,
        spaceBetween: 10
      },
      400: {
        slidesPerView:1,
        spaceBetween: 10
      },
      420: {
        slidesPerView:1,
        spaceBetween: 10
      },
      426: {
        slidesPerView: 1,
        spaceBetween: 10
      },
  
      430: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      440: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      450: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      460: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      470: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      500: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      600: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      601: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      627: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      628: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      700: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      699: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      700: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      801: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      
      800: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      802: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      
      805: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      
      810: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      
      820: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      
      840: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      
      860: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      
      880: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      943: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      944: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      
      900: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1120: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1130: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1140: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1150: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1152: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1155: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1157: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1158: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1160: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1170: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1180: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1170: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1180: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1190: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1200: {
        slidesPerView:3,
        spaceBetween: 20
      },
      1216: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1218: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1220: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1230: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1240: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1250: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1260: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1270: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1299: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1300: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1500: {
        slidesPerView: 4,
        spaceBetween: 14
      },
      1600: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1700: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1800: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1920: {
        slidesPerView: 4,
        spaceBetween: 10
      }
    }
  });

})



$(document).on("click", "#special_name3", function(){

    var data_id = $(this).data("id");
    $(".courses_name").removeClass("active")
    $(this).addClass("active");

    $(".hidden_slider").removeClass("open");
    $("#" + data_id).addClass("open");

  //four_swiper
  const swiper_four = new Swiper('#four_swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 23,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      324: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      330: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      340: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      350: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      360: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      370: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      371: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      372: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      373: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      374: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      375: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      376: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      378: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      379: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      380: {
        slidesPerView:1,
        spaceBetween: 10
      },
      400: {
        slidesPerView:1,
        spaceBetween: 10
      },
      420: {
        slidesPerView:1,
        spaceBetween: 10
      },
      426: {
        slidesPerView: 1,
        spaceBetween: 10
      },
  
      430: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      440: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      450: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      460: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      470: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      500: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      600: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      601: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      627: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      628: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      700: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      699: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      700: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      801: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      
      800: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      802: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      
      805: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      
      810: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      
      820: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      
      840: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      
      860: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      
      880: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      943: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      944: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      
      900: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1120: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1130: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1140: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1150: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1152: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1155: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1157: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1158: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1160: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1170: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1180: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1170: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1180: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1190: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1200: {
        slidesPerView:3,
        spaceBetween: 20
      },
      1216: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1218: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1220: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1230: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1240: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1250: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1260: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1270: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1299: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1300: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1500: {
        slidesPerView: 4,
        spaceBetween: 14
      },
      1600: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1700: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1800: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1920: {
        slidesPerView: 4,
        spaceBetween: 10
      }
    }
  });
})

$(document).on("click", "#special_name4", function(){

    var data_id = $(this).data("id");
    $(".courses_name").removeClass("active")
    $(this).addClass("active");

    $(".hidden_slider").removeClass("open");
    $("#" + data_id).addClass("open");


    //five_swiper
    const swiper_five = new Swiper('#five_swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 4,
        spaceBetween: 23,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          324: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          330: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          340: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          350: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          360: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          370: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          371: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          372: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          373: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          374: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          375: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          376: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          378: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          379: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          380: {
            slidesPerView:1,
            spaceBetween: 10
          },
          400: {
            slidesPerView:1,
            spaceBetween: 10
          },
          420: {
            slidesPerView:1,
            spaceBetween: 10
          },
          426: {
            slidesPerView: 1,
            spaceBetween: 10
          },
      
          430: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          440: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          450: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          460: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          470: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          500: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          600: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          601: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          627: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          628: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          699: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          801: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          
          800: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          802: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          
          805: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          
          810: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          
          820: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          
          840: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          
          860: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          
          880: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          943: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          944: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          
          900: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1100: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1120: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1130: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1140: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1150: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1152: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1155: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1157: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1158: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1160: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1170: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1170: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1190: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1200: {
            slidesPerView:3,
            spaceBetween: 20
          },
          1216: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1218: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1220: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1230: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1240: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1250: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1260: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1270: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1299: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1300: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1500: {
            slidesPerView: 4,
            spaceBetween: 14
          },
          1600: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1700: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1800: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1920: {
            slidesPerView: 4,
            spaceBetween: 10
          }
        }
      });
})

$(document).on("click", "#special_name5", function(){

    var data_id = $(this).data("id");
    $(".courses_name").removeClass("active")
    $(this).addClass("active");

    $(".hidden_slider").removeClass("open");
    $("#" + data_id).addClass("open");

    //six_swiper
    const swiper_six = new Swiper('#six_swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 4,
        spaceBetween: 23,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          324: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          330: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          340: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          350: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          360: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          370: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          371: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          372: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          373: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          374: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          375: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          376: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          378: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          379: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          380: {
            slidesPerView:1,
            spaceBetween: 10
          },
          400: {
            slidesPerView:1,
            spaceBetween: 10
          },
          420: {
            slidesPerView:1,
            spaceBetween: 10
          },
          426: {
            slidesPerView: 1,
            spaceBetween: 10
          },
      
          430: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          440: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          450: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          460: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          470: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          500: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          600: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          601: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          627: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          628: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          699: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          801: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          
          800: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          802: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          
          805: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          
          810: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          
          820: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          
          840: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          
          860: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          
          880: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          943: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          944: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          
          900: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1100: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1120: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1130: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1140: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1150: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1152: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1155: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1157: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1158: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1160: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1170: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1170: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1190: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1200: {
            slidesPerView:3,
            spaceBetween: 20
          },
          1216: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1218: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1220: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1230: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1240: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1250: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1260: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1270: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1299: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1300: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1500: {
            slidesPerView: 4,
            spaceBetween: 14
          },
          1600: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1700: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1800: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1920: {
            slidesPerView: 4,
            spaceBetween: 10
          }
        }
      });
    
})

$(document).on("click", "#special_name6", function(){

    var data_id = $(this).data("id");
    $(".courses_name").removeClass("active")
    $(this).addClass("active");

    $(".hidden_slider").removeClass("open");
    $("#" + data_id).addClass("open");

        //seven_swiper
 const swiper_seven = new Swiper('#seven_swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 23,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      324: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      330: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      340: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      350: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      360: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      370: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      371: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      372: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      373: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      374: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      375: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      376: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      378: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      379: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      380: {
        slidesPerView:1,
        spaceBetween: 10
      },
      400: {
        slidesPerView:1,
        spaceBetween: 10
      },
      420: {
        slidesPerView:1,
        spaceBetween: 10
      },
      426: {
        slidesPerView: 1,
        spaceBetween: 10
      },
  
      430: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      440: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      450: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      460: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      470: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      500: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      600: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      601: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      627: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      628: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      700: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      699: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      700: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      801: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      
      800: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      802: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      
      805: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      
      810: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      
      820: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      
      840: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      
      860: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      
      880: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      943: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      944: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      
      900: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1120: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1130: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1140: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1150: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1152: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1155: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1157: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1158: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1160: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1170: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1180: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1170: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1180: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1190: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1200: {
        slidesPerView:3,
        spaceBetween: 20
      },
      1216: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1218: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1220: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1230: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1240: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1250: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1260: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1270: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1299: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1300: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1500: {
        slidesPerView: 4,
        spaceBetween: 14
      },
      1600: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1700: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1800: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1920: {
        slidesPerView: 4,
        spaceBetween: 10
      }
    }
  });


  $(document).on("click", ".courses_name", function(){

    var data_id = $(this).data("id");
    $(".courses_name").removeClass("active")
    $(this).addClass("active");

    $(".hidden_slider").removeClass("open");
    $("#" + data_id).addClass("open");

})

    
})



$(document).on("click", ".courses_svg", function(){

  $(".courses_wrapper_hidden").toggleClass("open");
  
})


// $(document).on("click", ".catagories_item", function(){

//   var data_id = $(this).data("id");

//   $(".courses_item_details").removeClass("open");
//   $("#" + data_id).addClass("open");



// })

