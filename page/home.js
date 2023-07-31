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

$(".is--home-experience.is--second").each(function (index) {
  let target = $(".circle--bg");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top top",
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

$(".is--home-experience.is--third").each(function (index) {
  let target = $(".circle--bg");
  let target2 = $(".circle--bg-top");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top center",
      end: "bottom bottom",
      ease: "Quint.easeOut",
      duration: 1,
      scrub: true,
    },
  });

  tl.to(
    target,
    {
      width: "121vw",
      height: "121vw",
    },
    0
  );
  tl.to(
    target2,
    {
      width: "80vw",
      height: "80vw",
    },
    0
  );
});
