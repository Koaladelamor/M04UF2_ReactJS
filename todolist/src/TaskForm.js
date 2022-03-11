import React from 'react';

import Submit from './Submit.js';
import TextForm from './TextForm.js';

class TaskForm extends React.Component {

	constructor(props){
		super(props);
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log("Hola");
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<TextForm />
				<Submit />
			</form>
		);
	}
}

export default TaskForm;
