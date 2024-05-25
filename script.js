gsap.registerPlugin(ScrollTrigger);

function loader() {
  const wrapper = document.querySelector(".wrapper");
  wrapper.style.height = "100vh";
  wrapper.style.overflow = "hidden";

  let loaderHeading = document.querySelector(".loader .textbox h3");
  var clutter1 = "";
  loaderHeading.textContent.split("").forEach(function (charc) {
    clutter1 += `<span>${charc}</span>`;
  });
  loaderHeading.innerHTML = clutter1;

  setTimeout(() => {
    document.fonts.ready.then(function () {
      const loader = document.querySelector(".loader");

      let tl1 = gsap.timeline();

      tl1
        .to(".textbox h3 span", {
          stagger: 0.1,
          filter: "blur(0px)",
          duration: 0.8,
          opacity: 1,
          ease: Expo,
        })
        .to(".textbox h3 span", {
          stagger: 0.1,
          filter: "blur(2px)",
          duration: 0.2,
          opacity: 0,
          ease: Expo,
        })
        .to(loader, {
          height: "0vh",
          onComplete: () => {
            loader.style.display = none;
          },
          onUpdate: () => {
            wrapper.style.height = "fit-content";
            wrapper.style.overflow = "visible";
          },
        })
        .to(loader.children[0], {
          display: "none",
        });
    });
  }, 2000);
}

loader();

function sec1Animation() {
  document.querySelectorAll(".textbox h1").forEach(function (h1) {
    var clutter2 = "";
    h1.textContent.split("").forEach(function (charc) {
      clutter2 += `<span>${charc}</span>`;
    });
    h1.innerHTML = clutter2;
  });

  var tl2 = gsap.timeline({ delay: 5 });

  tl2
    .from(".textbox h1 span", {
      stagger: 0.1,
      filter: "blur(2px)",
      scale: 1.5,
      duration: 2,
      opacity: 0,
      ease: Expo,
    })
    .from(
      ".nav .linkbox .fs5",
      {
        stagger: 0.1,
        duration: 2,
        y: 20,
        opacity: 0,
        ease: Expo,
      },
      "-=2"
    )
    .from(
      ".nav .fs4",
      {
        duration: 2,
        y: 20,
        stagger: 0.5,
        opacity: 0,
        ease: Expo,
      },
      "-=2"
    )
    .from(
      ".circle",
      {
        duration: 2,
        scale: 2,
        filter: "blur(1px)",
        ease: Expo,
      },
      "-=2"
    )
    .from(".circle button", {
      duration: 1,
      rotate: "270deg",
      opacity: 0,
      ease: Expo,
    });

  if (window.screen.width < 600) {
    gsap.to(".sec1 .imgbox", {
      scrollTrigger: {
        trigger: ".sec1",
        top: "bottom 0%",
        scrub: 2,
        pin: true,
      },
      height: "100vh",
      width: "100%",
    });
  } else {
    gsap.to(".sec1 .imgbox", {
      scrollTrigger: {
        trigger: ".sec1",
        top: "bottom 0%",
        scrub: 2,
        pin: true,
      },
      height: "100vmax",
      width: "100vmax",
    });
  }
}
sec1Animation();

function sec3Animation() {
  document.querySelector(".sec3").addEventListener("click", function (dets) {
    let sb = dets.target.id;
    let stripebox = "#" + sb;
    let gt = sb.split("-")[1];
    let dec = 100 - (4 - gt) * 4;
    let sbelem = ".sb-" + gt + "-elem";
    let number = document.querySelectorAll(".stripebox h5");

    if (window.screen.width < 850) {
      dec = 100 - (4 - gt) * 6;

      gsap.to(stripebox, {
        duration: 2,
        height: dec + "vh",
        ease: "expo.out",
      });

      gsap.to(dets.target.children[0], {
        opacity: 0,
        pointerEvents: "all",
      });

      gsap.to(dets.target.children[1], {
        opacity: 1,
        pointerEvents: "all",
        delay: 1.5,
      });

      gsap.to(dets.target.children[2], {
        opacity: 1,
        pointerEvents: "all",
        delay: 1,
      });

      gsap.to(dets.target.children[3], {
        opacity: 1,
        pointerEvents: "all",
        delay: 0.5,
      });

      document.querySelector(sbelem).addEventListener("click", function (dets) {
        gsap.to(number, {
          opacity: 1,
          delay: 2,
          pointerEvents: "none",
        });

        gsap.to(sbelem, {
          opacity: 0,
          pointerEvents: "none",
          stagger: 0.25,
        });

        gsap.to("#" + sb, {
          height: "6vh",
          delay: 1,
          ease: "expo.out",
          duration: 2,
        });
      });
    } else {
      gsap.to(stripebox, {
        duration: 2,
        width: dec + "%",
        ease: "expo.out",
      });

      gsap.to(dets.target.children[0], {
        opacity: 0,
        pointerEvents: "all",
      });

      gsap.to(dets.target.children[1], {
        opacity: 1,
        pointerEvents: "all",
        delay: 1.5,
      });

      gsap.to(dets.target.children[2], {
        opacity: 1,
        pointerEvents: "all",
        delay: 1,
      });

      gsap.to(dets.target.children[3], {
        opacity: 1,
        pointerEvents: "all",
        delay: 0.5,
      });

      document.querySelector(sbelem).addEventListener("click", function (dets) {
        gsap.to(number, {
          opacity: 1,
          delay: 2,
          pointerEvents: "none",
        });

        gsap.to(sbelem, {
          opacity: 0,
          pointerEvents: "none",
          stagger: 0.25,
        });

        gsap.to("#" + sb, {
          width: "4%",
          delay: 1,
          ease: "expo.out",
          duration: 2,
        });
      });
    }
  });
}

sec3Animation();

function sec4Animation() {
  let allArtists = document.querySelectorAll(".sec4 .artists");
  allArtists = [...allArtists];
  let isHovered = null;

  allArtists.forEach(function (artist) {
    artist.addEventListener("mouseover", function (dets) {
      isHovered = "#art" + dets.target.dataset.index;
      document.querySelector(isHovered).style.width = "100%";
    });

    artist.addEventListener("mouseout", function (dets) {
      isHovered = "#art" + dets.target.dataset.index;
      document.querySelector(isHovered).style.width = "0%";
    });
  });
}

sec4Animation();
