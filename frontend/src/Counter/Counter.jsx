import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"

import { Button } from 'react-bootstrap'
import { decrementActionCreator, incrementActionAsync, incrementActionCreator } from '../reducers/countReducer';

function Counter() {
    const [value, setValue] = useState(1)
    const {count} =  useSelector(state=>state.counter);
    const dispatch = useDispatch();
    
    const incrementCount = ()=>{
        // setcount(count=>count+1);
        dispatch(incrementActionCreator(value));
    }
 
    const incrementCountAsync = ()=>{
        // setcount(count=>count+1);
        dispatch(incrementActionAsync(value));
    }

    const decrementCount = ()=>{
        // setcount(count=>count-1);
        dispatch(decrementActionCreator(value));
    }
    return (
        <>
            <h1>Counter - {count}</h1>
            <input placeholder='value' type="number" min="1" onChange={(e)=>setValue(+e.target.value)}/>
            <Button variant='success' onClick={incrementCount}>Increment by {value}</Button>
            <Button variant='success' onClick={incrementCountAsync}>Increment by {value} async</Button>
            <Button variant='danger' onClick={decrementCount}>Decrement by {value}</Button>
        </>
    )
}

export default Counter