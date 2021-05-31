const btn = document.querySelector('.menu');
const back = document.querySelector('.fa-times');
const nav = document.querySelector('nav');
const nav_btn = document.querySelector('.nav_back');

btn.addEventListener('click', ()=>{
  nav.classList.toggle('open-menu')
});

back.addEventListener('click', ()=>{
  nav.classList.toggle('open-menu')
});

nav_btn.addEventListener('click', ()=>{
  nav.classList.toggle('open-menu')
});


