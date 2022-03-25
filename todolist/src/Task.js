import RemoveTask from './RemoveTask.js';
import ListItem from '@mui/material/ListItem';

function Task(props){
	return(
		<ListItem>
			 {props.name} <RemoveTask id_task={props.id_task} removeTask={props.removeTask} /> 
		</ListItem>
	);
}

export default Task;
