// import './src/public/styles/css'
import  './public/styles/css/header.css';
import './public/styles/css/footer.css';
//document.body.innerHTML = 
//'<h1>Esto ya no es una prueba cracks</h1>'

import Header from './public/templates/Header';
import Footer from './public/templates/Footer';

document.getElementById("H").innerHTML = Header();
document.getElementById('F').innerHTML = Footer();