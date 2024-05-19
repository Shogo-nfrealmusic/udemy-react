import { createContext,useContext, useReducer } from "react";


const counterContext = createContext();
const counterDispatchContext = createContext();

const CounterProvider = ({ children }) => {
    const [state, dispatch] = useReducer((prev, { type, step }) => {
        switch (type) {
          case "+":
            return prev + step;
          case "-":
            return prev - step;
          default:
            throw new Error('不明なactionです。')
        }
      }, 0);
    return (
        <counterContext.Provider value={state}>
            <counterDispatchContext.Provider value={dispatch}>
             { children }
            </counterDispatchContext.Provider>
        </counterContext.Provider>
    )
}

const useCounter = () => {
    return useContext(counterContext);
}

const useCounterDispatch = () => {
    return useContext(counterDispatchContext);
}

export { CounterProvider, useCounter, useCounterDispatch}