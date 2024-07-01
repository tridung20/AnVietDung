// // INFO : ============= global =============

// INFO : sticky header khi scroll
if ($(".site-header").length) {
  var stickyOffset = $(".site-header").offset().top;
  $(window).scroll(function () {
    var sticky = $(".site-header"),
      scroll = $(window).scrollTop();
    if (scroll >= stickyOffset) {
      sticky.addClass("fixed");
    } else {
      sticky.removeClass("fixed");
    }
  });
}

// INFO : show search khi chưa scroll
var stickyOffset2 = $(".site-header").offset().top;
var scroll2 = $(window).scrollTop();
var sticky2 = $(".site-header");

$(".site-header .wrap-search").click(function () {
  if (scroll2 < stickyOffset2) {
    sticky2.toggleClass("sticky-header");
  }
});

$(".mask").click(function () {
  $("body").toggleClass("no-scroll");
  $(".navigation").css("display", "none");
  $(".search-wrapper").css("display", "none");

  if ($(".site-header.sticky-header").length) {
    $(".site-header").removeClass("sticky-header");
  }
});

// INFO : for header
$(".site-header .hamburger").click(function () {
  $(".search-wrapper").css("display", "none");
  $(".navigation").fadeToggle("fast");
  $("body").toggleClass("no-scroll");
});

$(".site-header .wrap-search").click(function () {
  $(".navigation").css("display", "none");
  $(".search-wrapper").fadeToggle("fast");
  $("body").toggleClass("no-scroll");
});

$(".navigation .ic-angle-down").click(function (e) {
  e.preventDefault();
  const parent = $(e.target).parent();
  const subMenu = parent.siblings()[0];
  $(subMenu).slideToggle("");
});

// INFO: back to top
var backToTop = $(".back-to-top");
$(window).scroll(function () {
  if ($(window).scrollTop() > 800) {
    backToTop.addClass("show");
  } else {
    backToTop.removeClass("show");
  }
});
backToTop.click(function () {
  $("html, body").animate({ scrollTop: 0 }, 800);
  return false;
});

// INFO: shorten
function shortenText() {
  $(".story__shorten").each(function () {
    var wordArray = $(this).html().split(" ");
    var i = 0;
    while (
      i < wordArray.length / 2 &&
      $(this).get(0).scrollHeight > $(this).get(0).offsetHeight
    ) {
      i++;

      wordArray.pop();
      $(this).html(wordArray.join(" ") + "...");
    }
  });
}
window.setTimeout(function () {
  shortenText();
}, 3000);

// INFO: bg-highlight
if ($(".abf-homepage").length) {
  var swiper = new Swiper(".abf-homepage .swiper", {
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 3500,
      // disableOnInteraction: false,
    },
    allowTouchMove: false,
  });
}

// // INFO: sticky
// $(document).ready(function () {
//   var header = $(".site-header .sticky");
//   var sticky = header.offset().top;

//   $(window).scroll(function () {
//     if ($(window).scrollTop() > sticky) {
//       header.addClass("fixed");
//     } else {
//       header.removeClass("fixed");
//     }
//   });
// });

// INFO: products
if ($(".zone-4").length) {
  var swiper4 = new Swiper(".zone-4 .swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    speed: 2000,
    autoplay: {
      delay: 1500,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
  });
}

// INFO: partner
if ($(".zone-5").length) {
  var swiper3 = new Swiper(".zone-5 .swiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    speed: 2000,
    autoplay: {
      delay: 1500,
    },
    loop: true,
    allowTouchMove: true,
    disableOnInteraction: true,
  });
}

// INFO: gallery detail
if ($(".zce-content-body").length) {
  //   var swiper = new Swiper(".mySwiper", {
  //     loop: true,
  //     spaceBetween: 10,
  //     slidesPerView: 4,
  //     freeMode: true,
  //     watchSlidesProgress: true,
  //   });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    speed: 1000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

// INFO: product-item
if ($(".product-item .swiper").length) {
  const swiper = new Swiper(".product-item .swiper", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
  });
}