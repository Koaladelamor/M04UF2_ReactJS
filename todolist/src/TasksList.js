import Task from './Task.js';
import React from 'react';

class TasksList extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			tasks: props.tasks
		};
	}

	

	render(){
	
		let t = this.state.tasks;

		let tasks = [];

		for(let i = 0; i < t.length; i++){
			tasks.push(<Task name={t[i]} key={i} />);
		}
		return(
			<ul>
				{tasks}
			</ul>
		);
	}
}

export default TasksList;
