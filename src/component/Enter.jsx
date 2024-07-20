import { Box, Button, TextField } from '@mui/material'
import React from 'react'

const Enter = () => {
  return (
    <Box p={3} style={{display:"flex", flexDirection:'column',gap:'20px'}}>
        <TextField variant='outlined' type='email' label='Enter Email'  fullWidth ></TextField>
        <TextField variant='outlined' type='password' label='Password'  fullWidth ></TextField>
     
        <Button variant='contained' size='large' >Login</Button>
    </Box>
  )
}

export default Enter