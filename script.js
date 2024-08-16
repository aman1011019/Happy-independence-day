const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = '#29323c';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});

menu_item.forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  });
});
var t1= gsap.timeline()
.to("#language", {
   duration: 0,
   zIndex: 9,
})

.to("#lan1", {
   opacity: 1,
   duration: 0.07,
})

.to("#lan1", {
   opacity: 0,
   duration: 0.07,
})

.to("#lan2", {
   opacity: 1,
   duration: 0.07,
})

.to("#lan2", {
   opacity: 0,
   duration: 0.07,
})

.to("#lan3", {
   opacity: 1,
   duration: 0.07,
})

.to("#lan3", {
   opacity: 0,
   duration: 0.07,
})

.to("#lan4", {
   opacity: 1,
   duration: 0.07,
})

.to("#lan4", {
   opacity: 0,
   duration: 0.07,
})

.to("#lan5", {
   opacity: 1,
   duration: 0.07,
})

.to("#lan5", {
   opacity: 0,
   duration: 0.07,
})

.to("#lan6", {
   opacity: 1,
   duration: 0.07,
})

.to("#lan6", {
   opacity: 0,
   duration: 0.07,
})

.to("#lan7", {
   opacity: 1,
   duration: 0.07,
})

.to("#lan7", {
   opacity: 0,
   duration: 0.07,
})

.to("#lan8", {
   opacity: 1,
   duration: 0.07,
})

.to("#lan8", {
   opacity: 0,
   duration: 0.07,
})

.to("#lan9", {
   opacity: 1,
   duration: 0.07,
})

.to("#lan9", {
   opacity: 0,
   duration: 0.07,
})

.to("#lan10", {
   y:-30,
   opacity: 1,
   duration: 0.07,
})

.to("#language", {
   height: 0,
   duration: 1,
   delay: 1
})
t1.from("#page1 h1",{
   x:-50,
   duration:1,
   opacity:0,
   delay:0.5
})
t1.from("#page1 h2",{
   scale:0,
   duration:1,
   opacity:0,
   delay:0.5
})
t1.from("#page1 h3",{
   x:50,
   duration:1,
   opacity:0,
   stagger:0.3
})