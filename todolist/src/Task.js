import RemoveTask from './RemoveTask.js';
function Task(props){
	return(
		<li>
			 {props.name} <RemoveTask /> 
		</li>
	);
}

export default Task;
