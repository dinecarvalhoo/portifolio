document.addEventListener("DOMContentLoaded", function () {

    const btnContato = document.getElementById("btnContato");
    const btnContato2 = document.getElementById("btnContato2");

    const modalContato = document.getElementById("modalContato");
    const FecharContato = document.getElementById("FecharContato");


    btnContato.addEventListener("click", function () {
        modalContato.style.display = "flex";
    });


    btnContato2.addEventListener("click", function () {
        modalContato.style.display = "flex";
    });


    FecharContato.addEventListener("click", function () {
        modalContato.style.display = "none";
    });

});

   const btnMenuMobile = document.getElementById('btnMenuMobile');
   const menuMobile = document.getElementById('menuMobile');
   btnMenuMobile.addEventListener('click', () => {
    menuMobile.classList.toggle('ativo');
});

const linksMenuMobile = menuMobile.querySelectorAll('a');

linksMenuMobile.forEach(link => {
    link.addEventListener('click', () => {
        menuMobile.classList.remove('ativo');
    });
});