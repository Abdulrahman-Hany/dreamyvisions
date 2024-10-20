/* =============== Gsap JS =============== */
gsap.from(".brand a img", {
    opacity:0,
    y:-10,
    delay:0.5,
    duration:.5
})
gsap.from(".nav-links li a", {
    opacity:0,
    y:-10,
    delay:1,
    duration:.9,
    stagger:.3
})
gsap.from(".nav-links li span", {
    opacity:0,
    y:-10,
    delay:1.5,
    duration:.9,
    stagger:.3
})
gsap.from("button.auth-links span a", {
    opacity:0,
    delay:1.4,
    y:-10,
    duration:.9,
    stagger:.3
})


gsap.from(".elementor-background-overlay .badge", {
    opacity:0,
    delay:.6,
    y:-10,
    duration:.9,
    stagger:.3
})
gsap.from(".elementor-background-overlay h1", {
    opacity:0,
    delay:.9,
    y:-10,
    duration:.9,
    stagger:.3
})
gsap.from(".features li", {
    opacity:0,
    delay:1.3,
    x:10,
    duration:.9,
    stagger:.3
})
