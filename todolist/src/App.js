//import './App.css';
import Title from './Title.js';
import TaskForm from './TaskForm.js';
import TasksList from './TasksList';
import React from 'react';

class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			tasks: []	
		};


	}

	componentWillMount(){
   		fetch("http://10.40.1.105:3030/")
			.then(res => res.json())
			.then(data => this.setTasks(data));
	}

	setTasks = data => {
		for(let i = 0; i < data.length; i++){
			this.state.tasks.push(data[i].task);
		}
		this.setState({
			tasks: this.state.tasks
		});
	};

	addTask = task => {
		this.state.tasks.push(task);
		this.setState({
			tasks: this.state.tasks
		});	


   		fetch("http://10.40.1.105:3030", {
			method: 'POST',
			body: task
			//body: '{"task":"'+task+'"}'
		});

	}

	removeTask = id_task => {
		this.state.tasks.splice(id_task, 1);
		this.setState({
			tasks: this.state.tasks
		});
	}

	render(){

		return (
	    	<div className="App">
				<Title />		
				<TaskForm addTask={this.addTask} />
				<TasksList tasks={this.state.tasks} removeTask={this.removeTask} />
    		</div>
 	 	);
  }
}

export default App;
