import { AppBar, Button, Container, createTheme, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { unstable_HistoryRouter } from 'react-router-dom'
import { CryotoState } from '../context/Crypto'

const Header = () => {

    const [currancy , setCurrancy] = useState('INR')
 
    // const history = createTheme({
    //     palette:{
    //         primary:{
    //             main:'#0000',
    //         },
    //         type: 'dark',
    //     },
    // })
     
    // const {currancy , setCurrancy } = CryotoState();
   
    // console.log(currancy)

    const update = (e) => {
        console.log(e.target.value)
    }

  return (

   <AppBar color="default" position='static'  >
        <Container>
         <Toolbar>
            <Typography style={{flex:1,color:'Black',fontFamily:"sans-serif" ,fontSize:30, fontWeight:'bold', cursor:'pointer' }}>
                Crypto
            </Typography>

            <Button color='primary' variant="outlined"  style={{width:100,height:40,marginRight:10,color:'black',fontWeight:"bold"
           }}>LogIn</Button>

           {/* <Select variant='outlined'
           style={{width:100,height:40,marginRight:10,
           }}
           value={currancy}
           onChange={(e) => setCurrancy(e.target.value)}
           >
            <MenuItem value={'USD'}>USD</MenuItem>
            <MenuItem value={'INR'} >INR</MenuItem>
           </Select> */}
            
         </Toolbar>
        </Container>
   </AppBar>
  
  )
}

export default Header