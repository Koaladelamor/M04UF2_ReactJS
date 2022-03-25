import React from 'react';
import TextField from '@mui/material/TextField';

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
			<TextField id="outlined-required" label="New Task" defaultValue={this.props.value} onChange={this.handleChange} />
		);
	}
}

export default TextForm;
