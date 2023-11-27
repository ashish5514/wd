

let menu = document.querySelector('.fa-bars');
let nav = document.querySelector('.nav');

menu.addEventListener('click',function(){
menu.classList.toggle('fa-times');
nav.classList.toggle('nav-toggle');

});

