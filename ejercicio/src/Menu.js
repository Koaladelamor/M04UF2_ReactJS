import './Menu.css';
import MenuItem from './MenuItem';

function Menu(){
	return(
		<nav>
			<ul>
				<MenuItem text="TEXTO EJEMPLO" url="/ejemplo" />

				<li><a href="index.html" id="home-link">Portada</a></li>
				<li><a href="contacto.html" id="contact-link" >Contacto</a></li>
				<li><a href="cv.html" id="cv-link">CV</a></li>
				<li><a href="juego.html" id="juego-link">Juego</a></li>
			</ul>
		</nav>
	);
}

export default Menu;
