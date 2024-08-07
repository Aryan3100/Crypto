import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import Tab from '@mui/material/Tab';
import { AppBar, Tabs } from '@mui/material';
import Enter from './Enter';
import Singup from './Singup';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,

};


export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  


  return (
    <div>
      <Button onClick={handleOpen}>Login</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
     
     <AppBar position='static' style={{backgroundColor:'transparent' , color:'black'}}>
        <Tabs onChange={handleChange} variant='fullWidth' style={{borderRadius:10}}>
            <Tab label="Login" />
            <Tab label="Sing Up"/>
        </Tabs>
     </AppBar>
              {value === 0 && <Enter/> }
              {value === 1 && <Singup/>}
        </Box>
      </Modal>
    </div>
  );
}