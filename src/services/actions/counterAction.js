import { DECREMENT, DECREMENT_BY_TEN, INCREMENT, INCREMENT_BY_TEN, RESET,  UPDATE_BY_VALUE_INCREMENT,UPDATE_BY_VALUE_DECREMENT } from "../constants/counterConstant"


export const incrementCounter =()=>{
    return{
        type:INCREMENT
    }
}

export const decrementCounter=()=>{
    return{
        type:DECREMENT
    }
}

export const resetCounter =()=>{
    return{
        type:RESET
    }
}

export const incrementByTenCounter =()=>{
    return{
        type:INCREMENT_BY_TEN
    }
}

export const decrementByTenCounter =()=>{
    return{
        type:DECREMENT_BY_TEN
    }
}

export const updateByValueCounter=(value)=>{
    return{
        type:UPDATE_BY_VALUE_INCREMENT,
        payload:value
    }
}

export const updateByValueDecrement=(value)=>{
    return{
        type:UPDATE_BY_VALUE_DECREMENT,
        payload:value
    }
}
