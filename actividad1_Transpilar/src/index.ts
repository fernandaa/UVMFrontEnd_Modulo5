import * as _ from 'lodash';


function componente(){
    const elemento = document.createElement('div');
    //lodash
    elemento.innerHTML = _.join(['Hola', ' Webpack']);
    elemento.classList.add('hola');
    elemento.classList.add('fondo');
    return elemento;
}


document.body.appendChild(componente());