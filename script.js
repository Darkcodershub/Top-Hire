var tl = gsap.timeline();

tl.from("#nav h1", {
  y: -80,
  opacity: 0,
  duration: 0.8,
  delay: 0.5,
});

tl.from("#nav-part2 h2", {
  y: -80,
  opacity: 0,
  duration: 0.8,
  stagger: 0.5,
});

tl.from("#page2 h1, #page2 h2, #page2 p", {
  x: -500,
  opacity: 0,
  duration: 0.7,
  stagger: 0.5,
});

tl.from("#page3 h1 img, #page3 h2 img, #page3 h3 img, #page3 p", {
  scale:9,
  opacity: 0,
  duration: 0.7,
  stagger: 0.5,
});

tl.from("#page4 h1", {
    scale:9,
    opacity: 0,
  duration: 0.7,
  stagger: 0.5,
});

tl.from("#page4 h2 img", {
    scale:9,
    opacity: 0,
  duration: 0.9,
  stagger: 0.5,
});

tl.from("#page5 h1, #page5 h2", {
  x: -500,
  opacity: 0,
  duration: 0.7,
  stagger: 0.5,
});

tl.from("#f1, #f2, #f3, #f4, #footer p, #footer h1 img", {
  x:-500,
  opacity: 0,
  duration: 0.7,
  stagger: 0.5,
});
