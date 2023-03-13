let botaoIniciar = document.querySelector('.formulario__botao');
let horasTela = document.querySelector('.horas');
let minutosTela = document.querySelector('.minutos');
let segundosTela = document.querySelector('.segundos');
let formulario = document.querySelector('.formulario');

let inputHoras = 0;
let inputMinutos = 0;
let inputSegundos = 0;

let intervalo;

botaoIniciar.addEventListener('click', (event) =>{
    event.preventDefault();
    clearInterval(intervalo);
    inputHoras = document.querySelector('.hora__input').value;
    inputMinutos = document.querySelector('.minuto__input').value;
    inputSegundos = document.querySelector('.segundo__input').value;
    if(inputHoras > 0) {
        horasTela.innerHTML = inputHoras;
    }
    if(inputMinutos > 0 && inputMinutos <= 60) {
        minutosTela.innerHTML = inputMinutos;
    }
    if(inputSegundos > 0 && inputSegundos <= 60) {
        segundosTela.innerHTML = inputSegundos;
    }

    intervalo = setInterval(atualizaTemporizador, 1000);
    formulario.reset();
})

function atualizaTemporizador() {   
    if(inputSegundos > 0) {
        inputSegundos = inputSegundos - 1;
        segundosTela.innerHTML = inputSegundos;
    } else if (inputMinutos > 0) {
        inputMinutos = inputMinutos - 1;
        minutosTela.innerHTML = inputMinutos;
        inputSegundos = 59;
        segundosTela.innerHTML = inputSegundos;
    } else if(inputHoras > 0) {
        inputHoras = inputHoras - 1;
        horasTela.innerHTML = inputHoras;
        inputMinutos = 59;
        minutosTela.innerHTML = inputMinutos;
        inputSegundos= 59;
        segundosTela.innerHTML = inputSegundos;
    } else {
        clearInterval(intervalo);
    }
}

let zerarTemporizador = document.querySelector('.botao__zerar');
zerarTemporizador.addEventListener('click', () => {
   location.reload();
})
