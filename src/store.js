import { createStore } from "redux";
import CounterReducer from "./services/reducers/counterReducer";

const store = createStore(CounterReducer);

export default store;