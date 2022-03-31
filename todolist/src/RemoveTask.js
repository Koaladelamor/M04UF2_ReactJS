import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import React from 'react';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

class RemoveTask extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			open: false
		};
	}

    handleClickOpen = () => {
		this.setState({
			open: true
		});
	};

	handleClose = () => {
		this.setState({
			open: false
		});
	};

	handleDelete = () =>{
		this.props.removeTask(this.props.id_task);
		this.setState({
			open: false
		});
	}

	render(){

	return(
	<div>
		<Button startIcon={<DeleteIcon />} variant="contained" 
		onClick={this.handleClickOpen}> 
			DELETE 		
		</Button>
		<Dialog open={this.state.open} 
		onClose={this.handleClose} 
		aria-labelledby="alert-dialog-title">
			<DialogTitle id="alert-dialog-title">
       			{"Delete Task?"}
       	 	</DialogTitle>
		 	<DialogContent>
			<DialogContentText id="alert-dialog-description">
				U sure pal?
			</DialogContentText>
			</DialogContent>
			<DialogActions>
          		<Button onClick={this.handleClose} >
					Cancel 
				</Button>
         		<Button onClick={this.handleDelete} >
         			Delete
         		</Button>
        	</DialogActions>
		</Dialog>			
	</div>
	);
	}
}

export default RemoveTask;
