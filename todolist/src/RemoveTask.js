import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function RemoveTask(props){
	return(
		<Button startIcon={<DeleteIcon />} variant="contained" onClick={function(event){props.removeTask(props.id_task);}}> DELETE </Button>
	);
}

export default RemoveTask;
