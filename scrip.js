const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const lamp = document.getElementById('lamp');
const trocar = document.getElementById('trocar');

function isLampQuebrada() {

    return lamp.src.indexOf('quebrada') > -1;

}

function ligado() {

    if (!isLampQuebrada()) {

        lamp.src = 'Acesa.png';

    }

}

function desligado() {

    if (!isLampQuebrada()) {

        lamp.src = 'Apagado.png';

    }

}

function quebrado() {

    lamp.src = 'quebrada.png';

}

ligar.addEventListener('click', ligado);
desligar.addEventListener('click', desligado);
lamp.addEventListener('click', quebrado);

if (!isLampQuebrada()) {

    trocar.addEventListener('click', function() {

        location.reload();
    });

}