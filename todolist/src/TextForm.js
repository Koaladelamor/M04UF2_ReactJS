import React from 'react';

class TextForm extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			value: ""
		};
	}

	handleChange = (event) => {
		this.setState({
			value: event.target.value
		});
			console.log(this.state.value);
	}

	render(){
		return(
			<input type="text" id="task-input" onChange={this.handleChange} />
		);
	}
}

export default TextForm;
