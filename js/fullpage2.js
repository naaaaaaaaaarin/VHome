gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

let sections = gsap.utils.toArray(".panel");

function goToSection(i) {
  gsap.to(window, {
    scrollTo: { y: i * innerHeight, autoKill: false, ease: "Power3.easeInOut" },
    duration: 0.85
  });
};

sections.forEach((eachPanel, i) => {
  ScrollTrigger.create({
    trigger: eachPanel,
    onEnter: () => goToSection(i)
  });

  ScrollTrigger.create({
    trigger: eachPanel,
    start: "bottom bottom",
    onEnterBack: () => goToSection(i)
  });
});