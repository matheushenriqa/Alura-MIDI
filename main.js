function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
    
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//Para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //Template String

    tecla.onclick = function () {
        tocaSom(idAudio);
    };

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Enter' || evento.code === 'Space') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}

/* document.querySelectorAll('.tecla').forEach((e) => e.addEventListener("click", function (e) {
    tocar(e);
}));

function tocar(object) {
    let audio = '#som_' + object.target.classList[1];
    audio.currentTime = 0;
    audio.play();
}; */