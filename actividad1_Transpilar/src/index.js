import _ from   'lodash';
import './estilo.css';
import Imagen from  './barChart.png'
import Datos from   './datos.csv'
import Yaml from   './datos.yaml'
import Json5 from   './datos.json5'
import './estilo.scss'; 

if('serviceWorker' in navigator){
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js').then(registration => {
            console.log("SW registrado", registration);
        }).catch( err =>{
            console.log("Sw no registrado", err);
        });
    });
}




function componente(){
    const elemento = document.createElement('div');
    //lodash
    elemento.innerHTML = _.join(['Hola', Datos[0][1]], ' ');
    elemento.classList.add('hola');
    elemento.classList.add('fondo');

    const miImagen = new Image();
    miImagen.src = Imagen;
    elemento.appendChild(miImagen);

    console.log(Datos);
    return elemento;
}


console.log(Yaml.title)
console.log(Json5.owner)
document.body.appendChild(componente());