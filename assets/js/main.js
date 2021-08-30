/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
// Thêm class show-menu vào thẻ có id nav-menu
if(navToggle) {
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu');
   })
}
// gỡ class show-menu của thẻ có id nav-menu
if(navClose) {
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu');
   })
}

/*==================== REMOVE MENU MOBILE ====================*/
// Khi bấm vào thẻ a thì đồng thời cũng tắt menu đi luôn
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
   const navMenu = document.getElementById('nav-menu');
   navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

const sr = ScrollReveal({
   distance: '60px',
   duration: 3000,
   delay: 600,
   // reset: true;
})


