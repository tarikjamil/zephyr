$("[animation='hero--trigger']").each(function (index) {
  let target = $("[animation='parallax-hero']");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top top",
      end: "bottom top",
      ease: "Quint.easeOut",
      duration: 1,
      scrub: true,
    },
  });

  tl.to(
    target,
    {
      y: "-20%",
      scale: 1.2,
    },
    0
  );
});

$(".is--home-experience.is--first").each(function (index) {
  let target = $(".circle--bg");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top bottom",
      end: "bottom center",
      ease: "Quint.easeOut",
      duration: 1,
      scrub: true,
    },
  });

  tl.to(
    target,
    {
      width: "76vw",
      height: "76vw",
    },
    0
  );
});
