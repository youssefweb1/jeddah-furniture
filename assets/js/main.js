// scroll animation
const sr = ScrollReveal({
    origin: "left",
    distance: "20px",
    duration: 1000,
    delay: 500,
  });
  
  sr.reveal(".left-side-1sec");
  
  sr.reveal(".reveal");
  
  
  
  // loading
  gsap.fromTo(
    ".loading-page",
    { opacity: 1 },
    {
      opacity: 0,
      duration: 1,
      display: "none",
      delay: 2,
    }
  );
  
  

