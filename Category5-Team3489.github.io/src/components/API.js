import React, { useEffect, useState } from 'react'
import Axios from 'axios'
 
export function BitcoinPrice() {
 
    const [Price, setPrice] = useState("")
 
    useEffect(() => {
        //Axios.get('https://api.coinbase.com/v2/prices/spot?currency=USD')
        Axios.get('https://db.team3489.tk')
        .then(response => {
            //setPrice(response.data.data.amount)
            setPrice(response.data)
            console.log(response.data)
            console.log(response.statusText)
        })
    }, [])
 
    return (
        <div>
            Current Bitcoin Price: ${Price}
        </div>
    )
}

export function Test3489DB() {
 
    const [TestText, setText] = useState("")
 
    useEffect(() => {
        Axios.get('https://db.team3489.tk')
        .then(response => {
            setText(response.data)
        })
    }, [])
 
    return (
        <div>
            Test 3498 DB: {TestText}
        </div>
    )
}