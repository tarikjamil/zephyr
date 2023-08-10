if (window.innerWidth > 992) {
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

  $(".circle--2").each(function (index) {
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

  $(".circle--3").each(function (index) {
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
        start: "top top+=200",
        end: "bottom bottom",
        ease: "Quint.easeOut",
        duration: 1,
      },
    });

    tl.to(targetMap, { scale: 1.2 })
      .from(target, { opacity: 0, delay: 0.75 })
      .from(target2, { opacity: 0, delay: 0.75 });
  });
}

if (window.innerWidth < 992) {
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
        scale: 2,
      },
      0
    );
  });
  $(".circle--2").each(function (index) {
    let target = $(".circle--bg");
    let target2 = $(".circle--bg-top");

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
        width: "189vw",
        height: "189vw",
      },
      0
    );
    tl.to(
      target2,
      {
        width: "140vw",
        height: "140vw",
      },
      0
    );
  });

  $(".circle--3").each(function (index) {
    let target = $(".circle--bg");
    let target2 = $(".circle--bg-top");

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
        width: "323vw",
        height: "323vw",
      },
      0
    );
    tl.to(
      target2,
      {
        width: "175vw",
        height: "175vw",
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
        start: "top center",
        end: "bottom bottom",
        ease: "Quint.easeOut",
        duration: 1,
      },
    });

    tl.to(targetMap, { scale: 1.2 })
      .from(target, { opacity: 0 })
      .from(target2, { opacity: 0 });
  });
}

// PAGE COLOR POWER-UP
window.addEventListener("DOMContentLoaded", (event) => {
  // attribute value checker
  function attr(defaultVal, attrVal) {
    const defaultValType = typeof defaultVal;
    if (typeof attrVal !== "string" || attrVal.trim() === "") return defaultVal;
    if (attrVal === "true" && defaultValType === "boolean") return true;
    if (attrVal === "false" && defaultValType === "boolean") return false;
    if (isNaN(attrVal) && defaultValType === "string") return attrVal;
    if (!isNaN(attrVal) && defaultValType === "number") return +attrVal;
    return defaultVal;
  }
  // pagecolor trigger
  $("[tr-pagecolor-element='trigger']").each(function (index) {
    // elements
    let triggerEl = $(this),
      targetEl = $(".body");
    // settings
    let classSetting = attr(
      "after-hero-body",
      triggerEl.attr("tr-pagecolor-class")
    );
    // result
    ScrollTrigger.create({
      trigger: triggerEl,
      start: "top center",
      end: "bottom center",
      onToggle: ({ self, isActive }) => {
        if (isActive) {
          targetEl.addClass(classSetting);
        } else {
          targetEl.removeClass(classSetting);
        }
      },
    });
  });
});
