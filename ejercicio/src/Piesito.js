import './Piesito.css';
import React from 'react';

class Piesito extends React.Component
{
	constructor(props){
		super(props);

		this.state = {
			date: new Date() 
		};

		setInterval( () => {
			this.setState({
				date: new Date()
			});
		}, 1000);
	}	
	
	render(){
		return(
			<footer>
				<p>Copy(c)2022 no copie ta feo</p>
				<p> La hora es {this.state.date.toLocaleTimeString()} </p>
			</footer>
		);
	}
}

export default Piesito;
