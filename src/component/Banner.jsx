import { Container, Typography } from '@mui/material'
import React from 'react'
import Crausal from './Crausal'

export const Banner = () => {
  return (
    <div style={{backgroundImage: 'url(./banner3.jpg)' , filter:'inherit'}}>
        <Container style={{ height:300, display:'flex', flexDirection:'column', paddingTop:25,
            justifyContent:'space-between', alignItems:'center' , 
         }} >
            <div style={{}} >
               <Typography
                 variant="h2"
                 style={{
                    color:'white',
                    fontWeight:'bold',
                    marginBottom: 15,
                    fontFamily: 'sans-serif'
                 }}
               >
                Cryptozzz
               </Typography>
            </div>
            <Crausal></Crausal>

         </Container>
    </div>
  )
}
