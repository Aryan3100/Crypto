import React, { Children, createContext, useContext, useEffect, useState } from 'react'


const Context = createContext();


const Crypto = ({children}) => {

    const [currancy , setCurrency] = useState('INR')
    const [symbol , setSymbol] = useState('0')

    // useEffect(()=>{
    //     if(currancy === 'INR' ) setSymbol('0');
    //         else if(currancy === 'USD') setSymbol('1');
    // }, [currancy]);

  return (
    <Context.Provider value={{currancy,symbol,setCurrency}} >
        {children}
    </Context.Provider>
  )
}

export default Crypto

export const CryotoState =()=>{
    return useContext(Context)
}