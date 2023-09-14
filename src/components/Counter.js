import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementByTenCounter, decrementCounter, incrementByTenCounter, incrementCounter, resetCounter, updateByValueCounter, updateByValueDecrement } from '../services/actions/counterAction'

const Counter = () => {
    const [getValue, setGetValue] = useState({ volume: 0 })
    const count = useSelector(state => state.count)
    const newCount = count < 0 ? true : count
    const dispatch = useDispatch()
    const message = getValue.volume
    const handleIncrement = () => {
        dispatch(incrementCounter())
    }
    const handleDecrement = () => {
        if (count > 0) {
            dispatch(decrementCounter())
        } else {
            alert("Value Never Decrement because value less than from decrements values")
        }
    }

    const handleIncrementByTen = () => {
        dispatch(incrementByTenCounter())
    }

    const handleDecrementByTen = () => {
        if (count > 9) {
            dispatch(decrementByTenCounter())
        } else {
            alert("Value Never Decrement because value less than from decrements values")
        }

    }

    const handleReset = () => {
        dispatch(resetCounter())
    }

    const handleUpdateByValueIncrement = () => {
        const values = parseInt(getValue.volume)
        dispatch(updateByValueCounter(values))
    }
    const handleUpdateByValueDecrement = () => {
        const values = parseInt(getValue.volume)
        if(count > values){
            dispatch(updateByValueDecrement(values))
        }else{
            alert("Value Never Decrement because value less than from decrements values")
        }
    }

    const styled1 = {
        backgroundColor: "green",
        color: "white",
        margin: "0.3rem",
        padding: "0.3rem",
        paddingRight: "0.8rem",
        paddingLeft: "0.8rem",
        border: "none",
        borderRadius: "0.4rem"
    }
    const styled2 = {
        backgroundColor: "red",
        color: "white",
        margin: "0.3rem",
        padding: "0.3rem",
        paddingRight: "0.8rem",
        paddingLeft: "0.8rem",
        border: "none",
        borderRadius: "0.4rem"
    }
    const styled3 = {
        backgroundColor: "yellow",
        color: "black",
        margin: "0.3rem",
        padding: "0.3rem",
        paddingRight: "0.8rem",
        paddingLeft: "0.8rem",
        border: "none",
        borderRadius: "0.4rem"
    }
    const styled4 = {
        backgroundColor: "yellow",
        color: "black",
        margin: "0.3rem",
        padding: "0.3rem",
        paddingRight: "0.8rem",
        paddingLeft: "0.8rem",
        border: "none",
        borderRadius: "0.4rem"
    }
    return (
        <div>
            <h2>Counter App</h2>
            <h3>Counter: {newCount}</h3>
            <div style={{ margin: "1rem" }}>
                <button style={styled1} onClick={handleIncrement}>Increment</button>
                <button style={styled2} onClick={handleDecrement}>Decrement</button>
                <button style={styled1} onClick={handleIncrementByTen}>INCREMENT BY 10</button>
                <button style={styled2} onClick={handleDecrementByTen}>Decrement BY 10</button>
                <button style={styled3} onClick={handleReset}>Reset</button>
            </div>
            <div>
                <input type="number" placeholder='Enter Value' style={styled4} value={getValue.volume} onChange={(e) => setGetValue({ ...getValue, volume: e.target.value })} />
                <button style={styled1} disabled={!message} onClick={handleUpdateByValueIncrement}>UPDATE BY VALUE INCREMENT</button>
                <button style={styled2} disabled={!message} onClick={handleUpdateByValueDecrement}>UPDATE BY VALUE DECREMENT</button>
            </div>
        </div>
    )
}

export default Counter


// 1. state - count : 0
// 2. actions - increment, decrement, reset
// 3. reducers - increment => count => count + 1
//  - decrement => count => count -1
//  - reset => count => count => 0
// 4. store
// 5. providing store in react root file
// 6. use store