
function Submit(){
	return(
		<input onClick={event => {
			event.preventDefault();
			console.log("hola");
		}} type="submit" value="Add"/>

	);
}

export default Submit;
