import './public/styles/css/style.css';
import  './public/styles/css/header.css';
import './public/styles/css/footer.css';
//document.body.innerHTML = 
//'<h1>Esto ya no es una prueba cracks</h1>'

import Header from './public/templates/Header';
import Footer from './public/templates/Footer';
import Body from './public/templates/Body';

document.getElementById("H").innerHTML = Header();
document.getElementById('F').innerHTML = Footer();
document.getElementById("B").innerHTML = Body();
