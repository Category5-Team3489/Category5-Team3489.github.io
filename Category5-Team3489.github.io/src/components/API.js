import React, { useEffect, useState } from 'react'
import Axios from 'axios'
 
export function BitcoinPrice() {
 
    const [Price, setPrice] = useState("")
 
    useEffect(() => {
        Axios.get('https://api.coinbase.com/v2/prices/spot?currency=USD')
        .then(response => {
            setPrice(response.data.data.amount)
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
            setText(response.data[0].summary)
        }).catch(error => {console.log(error)})
    }, [])
 
    return (
        <div>
            Test 3498 DB: {TestText}
        </div>
    )
}