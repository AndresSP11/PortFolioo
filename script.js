const menu=document.querySelector("#menu-bar");
const negrito=document.querySelector(".barritas");

menu.addEventListener('click',() =>{
    negrito.classList.toggle('barritas');
    console.log("hola mundo");
})
const typed = new Typed('.multiple-text',{
    strings: ['Frontend','Design','Youtuber','Blogger'],
    typeSpeed: 100,
    backSpedd: 100,
    backDelay: 1000,
    loop:true
});

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.contain-section1, .titulofeo ,.titulito',{origin:top})