// accordion --------------------- //
$(".team--accordion-trigger").on("click", function () {
  // Close other accordions when opening new one
  if (!$(this).hasClass("open")) {
    $(".team--accordion-trigger.open").click();
  }
  // Save the sibling of the toggle we clicked on
  let sibling = $(this).siblings(".team--accordion--response");
  let animationDuration = 500;

  if ($(this).hasClass("open")) {
    // Close the content div if already open
    sibling.animate({ height: "0px" }, animationDuration);
  } else {
    // Open the content div if already closed
    sibling.css("height", "auto");
    let autoHeight = sibling.height();
    sibling.css("height", "0px");
    sibling.animate({ height: autoHeight }, animationDuration, () => {
      sibling.css("height", "auto");

      // Scroll the page to the accordion, leaving 200 pixels from the top
      $("html, body").animate(
        {
          scrollTop: $(this).offset().top - 200,
        },
        animationDuration
      );
    });
  }
  // Open and close the toggle div
  $(this).toggleClass("open");
});
