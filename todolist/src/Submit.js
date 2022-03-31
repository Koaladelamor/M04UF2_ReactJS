import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';
import Tooltip from '@mui/material/Tooltip';

class Submit extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			showMessage: false
		};
	}

	render(){
		return(
			
			<Tooltip title="Add">
				<Button variant="contained" > 
					{<AddIcon />} 
				</Button>
			</Tooltip>
					
		);
	}
}

export default Submit;
