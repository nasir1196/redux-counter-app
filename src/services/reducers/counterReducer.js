import { DECREMENT, DECREMENT_BY_TEN, INCREMENT, INCREMENT_BY_TEN, RESET,  UPDATE_BY_VALUE_DECREMENT,  UPDATE_BY_VALUE_INCREMENT } from "../constants/counterConstant"

const initialCounter = { count: 0 }
const CounterReducer = (state = initialCounter, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }

        case RESET:
            return {
                ...state,
                count: 0
            }

        case INCREMENT_BY_TEN:
            return {
               ...state,
                count: state.count + 10
            }

        case DECREMENT_BY_TEN:
            return {
              ...state,
                count: state.count - 10
            }

        case UPDATE_BY_VALUE_INCREMENT:
            return {
              ...state,
                count:state.count + action.payload
            }

        case UPDATE_BY_VALUE_DECREMENT:
            return {
             ...state,
                count:state.count - action.payload
            }
        default:
            return state;
    }
}

export default CounterReducer;