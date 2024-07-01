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

// INFO: show search
$(".search-wrapper input").focusin(function () {
  $(this).addClass("show");
  $(".site-header .menu").addClass("insivible");
  $(".ic-close").css("display", "block");
  $(".ic-search").css("display", "none");
});

$(".search-wrapper input").focusout(function () {
  $(this).removeClass("show");
  $(".site-header .menu").removeClass("insivible");
  $(".ic-close").css("display", "none");
  $(".ic-search").css("display", "block");
});

// INFO: sticky
$(document).ready(function () {
  var header = $(".site-header .sticky");
  var sticky = header.offset().top;

  $(window).scroll(function () {
    if ($(window).scrollTop() > sticky) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  });
});

// INFO: partner
if ($(".zone-5").length) {
  var swiper2 = new Swiper(".zone-5 .swiper", {
    spaceBetween: 20,
    slidesPerView: "auto",
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
if ($(".mySwiper").length) {
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper3 = new Swiper(".mySwiper3", {
    loop: true,
    speed: 1000,
    spaceBetween: 10,
    thumbs: {
      swiper: swiper,
    },
  });
}