//Importar CSS
import './public/styles/css/style.css';
import  './public/styles/css/header.css';
import './public/styles/css/footer.css';
import './public/styles/css/estilo.css';

//Importando Partes 'templates' necesarias
import Header from './public/templates/Header';
import Footer from './public/templates/Footer';
import Body from './public/templates/Body';

import Inicio from './public/templates/Inicio';

//Inyectando elementos necesarios de las funciones
document.getElementById("H").innerHTML = Header();
document.getElementById('F').innerHTML = Footer();
document.getElementById("B").innerHTML = Body();

//Eventos
document.getElementById("event").onclick =  function(){
    document.getElementById('B').innerHTML = Inicio();
};
