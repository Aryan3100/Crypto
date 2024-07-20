import { Box, Button, TextField } from '@mui/material'
import React from 'react'

const Singup = () => {
  return (
    <Box p={3} style={{display:"flex", flexDirection:'column',gap:'20px'}}>
        <TextField variant='outlined' type='email' label='Enter Email'  fullWidth ></TextField>
        <TextField variant='outlined' type='password' label='Password'  fullWidth ></TextField>
        <TextField variant='outlined' type='password' label='Confirm Password'  fullWidth ></TextField>
        <Button variant='contained' size='large' >Sing Up</Button>
    </Box>
  )
}

export default Singup