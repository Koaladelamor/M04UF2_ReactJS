import './App.css';
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

	addTask = task => {
		this.state.tasks.push(task);
		this.setState({
			tasks: this.state.tasks
		});	
	}

	render(){

		return (
	    	<div className="App">
				<Title />		
				<TaskForm addTask={this.addTask} />
				<TasksList tasks={this.state.tasks} />
    		</div>
 	 	);
  }
}

export default App;
