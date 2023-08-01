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
      start: "top bottom",
      end: "bottom bottom",
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
      start: "top bottom",
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

$(".section.is-home-map").each(function (index) {
  let targetMap = $(".map-wrapper");
  let target = $(".home--map.is--1");
  let target2 = $(".home--map.is--2");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top top",
      end: "bottom bottom",
      ease: "Quint.easeOut",
      duration: 1,
    },
  });

  tl.to(
    targetMap,
    {
      scale: 1.2,
    },
    0
  );
  tl.from(
    target,
    {
      opacity: 0,
    },
    0
  );
  tl.from(
    target2,
    {
      opacity: 0,
    },
    0
  );
});
