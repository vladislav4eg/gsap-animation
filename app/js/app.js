gsap.timeline({ repeat: -1 })
  .to("#eyeLeft, #eyeRight", { duration: 0.2, scaleY: 1, ease: "power1.inOut"})
  .to("#eyeLeft, #eyeRight", { duration: 0.2, scaleY: 0.1, ease: "power1.inOut", delay: 2 });

gsap.to("#hand", {duration: 2, rotate: 5, transformOrigin: "50% 50%", ease: "linear", repeat: -1, yoyo: true});
gsap.to("#lips", { x: 2, y: 1, duration: 4, repeat: -1, yoyo:true});
gsap.to("#basked", { x: -5, y: -5, duration: 4, ease: "linear", repeat: -1, yoyo: true });
gsap.to("#creditCard", { x: 5, y: 5, duration: 4, ease: "linear", repeat: -1, yoyo: true });
gsap.to("#dress", { x: 0, fill: "#E8505B"});
gsap.to("#clothes", {  fill: "#E8505B"});
gsap.to("#Bubble", { opacity: 0});
gsap.to("#hat", { opacity: 0});
gsap.to("#ok", { opacity: 0});
gsap.to("#Socks", { opacity: 0});
gsap.to("#Handbag", { opacity: 0});
gsap.set("#okLine", { opacity: 0, strokeDasharray: 19, strokeDashoffset: 19});
gsap.to("#bagBuy", { opacity: 0});

const timeline = gsap.timeline({  });
timeline

.to("#Bubble", { delay: 1, opacity: 1})
.to("#cursor, #btnLeft", {delay: 1, duration: 0.5, scale: 0.94})
.to("#dress", { x: -200, duration: 0.5})
.to("#dress", { opacity: 0, duration: 0.1})
.to("#dress", { opacity: 1})
.from("#dress", {x: 200, fill: "#263238"})
.to("#clothes", {fill: "#263238", duration: 0.1})
.to("#cursor , #btnLeft", {delay: 1, duration: 0.5, scale: 1})


.to("#cursor, #btnLeft", {delay: 1, duration: 0.5, scale: 0.94})
.to("#dress", { x: -200, duration: 0.5})
.to("#dress", { opacity: 0, duration: 0.1})
.from("#dress", {x: 200, opacity: 1})
.to("#dress", { x: 0, duration: 0.5, fill: "#4b4be8"})
.to("#clothes", {fill: "#4b4be8", duration: 0.1})
.to("#cursor, #btnLeft", {delay: 1, duration: 0.5, scale: 1})

.to("#cursor", { x: -5, y:40})
.to("#cursor", { duration: 0.5, scale: 0.90})
.to("#hat", { opacity: 1, delay: 1, duration: 0.1})
.to("#cursor", { duration: 0.5, scale: 1})
.to("#cursor", { x: 30})
.to("#cursor", { duration: 0.5, scale: 0.90})
.to("#bagBuy", { opacity: 1})
.to("#cursor", { x: 70})
.to("#cursor", { duration: 0.5, scale: 0.90})
.to("#Socks", { opacity: 1})
.to("#cursor", { x: 100})
.to("#cursor", { duration: 0.5, scale: 0.90})
.to("#Handbag", { opacity: 1})

.to("#cursor", { x: 110, y: -270})
.to("#cursor", { duration: 0.5, scale: 0.90})
.to("#baskedBuy", { opacity: 0, duration: 0.3})
.to("#ok", { opacity: 1, duration: 0.3})
.to("#cursor", { duration: 0.5, opacity: 0})
.to("#okLine", {opacity: 1, strokeDashoffset: 0, duration: 2, ease: "power1.out",})

















