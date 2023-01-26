$(function () {
    $(window).on("scroll", function () {
        var scrollSize = $(window).scrollTop();
        //nav section
        if (scrollSize > 80) {
          $("#nav").addClass("active");
        } else {
          $("#nav").removeClass("active");
        }
        if (scrollSize > 80) {
          $("#side_nav").addClass("active");
        } else {
          $("#side_nav").removeClass("active");
        }
        //back to top section
        if (scrollSize > 200) {
          $("#back_to_top").addClass("active");
        } else {
          $("#back_to_top").removeClass("active");
        }
      });
      //back to top section
      $("#back_to_top").on("click", function () {
        $("html,body").animate(
          {
            scrollTop: 0,
          },
          1000
        );
      });
})