function moverPosicionRandom(elm){
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
};

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModoSexo = document.getElementsByClassName("modo_sexo")[0];

btnNo.addEventListener('mouseenter', function(e) {moverPosicionRandom(e.target)});

btnSi.addEventListener('click', function(e){
    alert('Sabia que dirías que SI. Casemonos ya y tengamos hijos. TE AMO!!!!❤️')
    divModoSexo.style.display = 'block'; 
    const cancion = new Audio ('audio\\g9VWhh8r5Vs_160.mp3')
    cancion.play();
});