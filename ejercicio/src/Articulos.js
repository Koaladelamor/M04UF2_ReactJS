import './Articulos.css';

function Articulos(){
	return(
		<main>

			<article id="first-article">  
				<h2 id="first-article-title">  Titulo de contenido </h2> 
				<p class="estructura-cuerpo"> Texto de prueba</p>
				<p> Texto de prueba</p>
			</article>

			<article id="second-article">
				<h2> Otro titulo de contenido </h2> 
				<p> Texto de prueba</p>
				<p class="estructura-cuerpo"> Texto de prueba</p>
			</article>

			<aside>
				<h2 id="tweets-title">Últimos twits</h2>
				<p>El azúcar es malo</p>
			</aside>

		</main>
	);
}

export default Articulos;
