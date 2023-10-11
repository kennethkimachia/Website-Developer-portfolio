function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


//Typing effect
//Typing effect
let typed= new Typed('.section__text__p2',{
  strings: ['Web developer ',' WordPress Developer', ' UI Designer', ' Freelancer'],
  typeSpeed: 100,
  backSpeed:100,
  backDelay:2000,
  loop: true,
})