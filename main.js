//en este caso conectaremos el menu btn 

document.querySelector('.menu-btn').addEventListener('click',()=>{
document.querySelector('.nav-menu').classList.toggle('show');

});

//esta clase es de nuestro ScrollReveal que significa 
/*ScrollReveal es una biblioteca de JavaScript para animar fácilmente elementos a medida que ingresan o salen de la ventana gráfica.
 Fue diseñado para ser robusto y flexible, pero esperamos que se sorprenda a continuación de lo fácil que es aprenderlo.
 
 en este caso ponemos delay que es demora para el resto de contenido
 se lo aplicamos elemento por elemento seccion por seccion*/ 

 ScrollReveal().reveal('.container');
 ScrollReveal().reveal('.container .nav-main li', {delay: 500});
 
 ScrollReveal().reveal('.segundaseccion', {delay: 500});
 ScrollReveal().reveal('.news-section', {delay: 600});
 ScrollReveal().reveal('.news-barner-one', {delay: 700});
 ScrollReveal().reveal('.news-banner-two', {delay: 500});
 ScrollReveal().reveal('.redessociales', {delay: 500});
 ScrollReveal().reveal('.footer-links', {delay: 500});













 

 
 