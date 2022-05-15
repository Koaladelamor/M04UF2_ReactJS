import './App.css';
import Title from './Title.js';
import TaskForm from './TaskForm.js';
import TasksList from './TasksList';
import React from 'react';

class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			tasks: [],	
			obj_id: []
		};


	}

	componentWillMount(){
   		fetch("http://192.168.1.50:3030/")
			.then(res => res.json())
			.then(data => this.setTasks(data));
	}

	setTasks = data => {
		for(let i = 0; i < data.length; i++){
			this.state.tasks.push(data[i].task);
			this.state.obj_id.push(data[i]._id);
		}
		this.setState({
			tasks: this.state.tasks,
			obj_id: this.state.obj_id
		});
	};

	addTask = task => {
		this.state.tasks.push(task);
		this.setState({
			tasks: this.state.tasks
		});	


   		fetch("http://192.168.1.50:3030", {
			method: 'POST',
			body: '{"task":"'+task+'"}'
		}).then(res => res.json())
		.then(data => {
			console.log("RECEIVING ID ");
			this.state.obj_id.push(data);
			this.setState({
				obj_id: this.state.obj_id
			});	
				
		});
		

	}

	removeTask = id_task => {

   		fetch("http://192.168.1.50:3030", {
			method: 'POST',
			body: '{"_id" : "' + this.state.obj_id[id_task] + '", "delete" : true}',
			delete : "true"
		});


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
