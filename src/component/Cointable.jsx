import { Container, LinearProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { CoinList } from '../config/api';
import axios from 'axios';
import { green, red } from '@mui/material/colors';

const Cointable = () => {

    const [fetch, setFetch] = useState([]);
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState('');


    const head = ['Coin', 'Price', '24h Change', 'Market Cap']

    const table = async () => {
        setLoading(true)
        const { data } = await axios.get(CoinList("INR"))
        setFetch(data)
        setLoading(false)
        
    }
      
    useEffect(() => {
        table();
    }, [])
    console.log(fetch)
    
    const handleSearch = () => {
        return fetch.filter((row) => (
            row.name.toLowerCase().includes(input) || row.symbol.toLowerCase().includes(input)
            
        ))
    }

    

    return (
        <Container style={{ textAlign: 'center' }}>
            <Typography
                variant='h4'
                style={{ margin: 18 }}
            >
                Crypto Currancy Price By Market Cap
            </Typography>
            <TextField label='Search for crypto'
                variant='outlined'
                style={{ marginBottom: 20, width: '100%' }}
                onChange={e => setInput(e.target.value)}
            >
            </TextField>
            <TableContainer>
                {loading ? (<LinearProgress />) :
                    <Table>
                        <TableHead style={{backgroundColor:'black' }}>
                            <TableRow>
                                {head.map((head) => (
                                    <TableCell key={head}
                                        align={head === 'Coin' ? '' : 'right'}
                                        style={{color:"white" , fontWeight:500}}
                                    >
                                        {head}
                                    </TableCell>
                                ))}

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {handleSearch().map((row) => {
                                const profit = row.price_change_percentage_24h > 0;
                                return (
                                    <TableRow >
                                        <TableCell>
                                            <img
                                                src={row?.image}
                                                alt={row.name}
                                                height='50'
                                            />
                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <span style={{ textTransform: "uppercase", fontSize: 20 }}>{row.symbol}</span>
                                                <span style={{ color: 'darkgray' }}>{row.name}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell align='right' style={{fontSize:16}} >
                                                  {row.current_price}
                                        </TableCell>
                                        <TableCell align='right' style={{color: profit > 0 ? green : red }} >
                                                  {row.price_change_percentage_24h.toFixed(2)}%
                                        </TableCell>
                                        <TableCell align='right' style={{fontSize:16}}>
                                                 {row.market_cap.toString().slice(0, -6)}M
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                }
            </TableContainer>
        </Container>
    )
}

export default Cointable