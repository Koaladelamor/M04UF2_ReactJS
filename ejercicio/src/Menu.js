import './Menu.css';

function Menu(){
	return(
		<nav>
			<ul>
				<li><a href="index.htlm" id="home-link">Portada</a></li>
				<li><a href="contacto.html" id="contact-link" >Contacto</a></li>
				<li><a href="cv.html" id="cv-link">CV</a></li>
				<li><a href="juego.html" id="juego-link">Juego</a></li>
			</ul>
		</nav>
	);
}

export default Menu;
