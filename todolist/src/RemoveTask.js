import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

function RemoveTask(props){
  	const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
		setOpen(true);
		};

	const handleClose = () => {
		setOpen(false);
		};

	return(
		<Button startIcon={<DeleteIcon />} variant="contained" 
		onClick={handleClickOpen}> 
			DELETE 		
		</Button>
		<Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title">
			<DialogTitle id="alert-dialog-title">
       			{"Delete Task?"}
       	 	</DialogTitle>
		 	<DialogContent>
			<DialogContentText id="alert-dialog-description">
				U sure pal?
			</DialogContentText>
			</DialogContent>
			<DialogActions>
          		<Button onClick={handleClose} Cancel </Button>
         		<Button onClick={function(even){props.removeTask(props.id_task);}} autoFocus>
         			Delete
         		</Button>
        	</DialogActions>
		</Dialog>			
	);
}

export default RemoveTask;
