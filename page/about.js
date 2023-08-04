$("[animation='parallax--trigger']").each(function (index) {
  let target = $(this).find("[animation='parallax']");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top bottom",
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
      ease: "Quint.easeOut",
    },
    0
  );
});
