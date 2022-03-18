import React from 'react';

class TextForm extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			value: props.value
		};
	}

	handleChange = (event) => {
		this.props.handleChange(event);
		this.setState({
			value: event.target.value
		});
	}

	render(){
		return(
			<input type="text" id="task-input" value={this.state.value} onChange={this.handleChange} />
		);
	}
}

export default TextForm;
