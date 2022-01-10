const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const lamp = document.getElementById('lamp');
const trocar = document.getElementById('trocar');


function lampOn() {
    lamp.src = 'Acesa.png';
    var funcao = 'Acesa';
}

function lampOff() {
    lamp.src = 'Apagado.png';
    var funcao = 'Apagado';
}

function lampBroken() {
    lamp.src = 'quebrada.png';
    var funcao = 'quebrado';
}

function trocar() {
    lamp.src = 'Apagado.png';
    var funcao = 'Apagado';
}

if (funcao = 'quebrado') {

    //.addEventListener('click', trocar);

}


if (funcao = 'Acesa') {
    lamp.addEventListener('click', lampBroken);
    desligar.addEventListener('click', lampOff);


}

if (funcao = 'Apagado') {

    ligar.addEventListener('click', lampOn);
    lamp.addEventListener('click', lampBroken);
}