import Task from './Task.js';
import React from 'react';
import List from '@mui/material/List';

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
			tasks.push(<Task name={t[i]} key={i} id_task={i} removeTask={this.props.removeTask} />);
		}
		return(
			<List>
				{tasks}
			</List>
		);
	}
}

export default TasksList;
