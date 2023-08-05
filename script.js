// split start
let texthero;

// Split the text up
function runSplit() {
  texthero = new SplitType("[animation='split-stagger-hero']", {
    types: "lines, words",
    lineClass: "split-line",
    wordClass: "is--scroll-hero-scrub",
  });
}

runSplit();

// split type ends

gsap.registerPlugin(ScrollTrigger);

// On Page Load
function pageLoad() {
  let tl = gsap.timeline();
  tl.to(".main-wrapper", {
    opacity: 1,
    ease: "Quint.easeOut",
    duration: 1,
  });
  tl.from(".is--scroll-hero-scrub", {
    y: "100%",
    opacity: "0",
    stagger: { each: 0.1, from: "start" },
    ease: "Quint.easeOut",
    duration: 1,
  });
  tl.from("[animation='loading']", {
    y: "20rem",
    opacity: "0",
    stagger: { each: 0.1, from: "start" },
    ease: "Quint.easeOut",
    duration: 1,
    delay: -1,
  });
}
pageLoad();

$("[animation='fade-in']").each(function (index) {
  let target = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top bottom -=200",
    },
  });

  tl.from(
    target,
    {
      y: "20rem",
      opacity: 0,
      ease: "Quint.easeOut",
      duration: 1,
    },
    0
  );
});

// navbar color
$(document).ready(function () {
  var scrollTop = 0;
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();
    if (scrollTop >= 100) {
      $(".navbar").addClass("is--scrolled");
    } else if (scrollTop < 100) {
      $(".navbar").removeClass("is--scrolled");
    }
  });
});

// navbar menu hamburger click
$(".navbar--menu-trigger").click(function () {
  var clicks = $(this).data("clicks");
  if (clicks) {
    // odd clicks
    gsap.to(".navlink-parent", {
      y: "100%",
      duration: 1,
      opacity: 0,
      ease: "Quint.easeOut",
    });
  } else {
    // even clicks
    gsap.fromTo(
      ".navlink-parent",
      {
        y: "100%",
        opacity: 0,
      },
      {
        duration: 1,
        delay: 0.5,
        y: "0%",
        opacity: 1,
        ease: "Quint.easeOut",
        stagger: {
          each: 0.1,
        },
      }
    );
  }
  $(this).data("clicks", !clicks);
});

$(".zephyr-footer-logo-wrapper").each(function (index) {
  let target = $(".zephyr-footer-logo-wrapper path");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top center",
      end: "bottom bottom",
      ease: "Quint.easeOut",
      duration: 1,
      delay: 0.5,
    },
  });

  tl.from(target, {
    y: "100%",
    opacity: 0,
    stagger: { each: 0.1, from: "start" },
  });
});

$(".contact--form-bg").on("click", function () {
  $(".contact--form-close").click();
});
