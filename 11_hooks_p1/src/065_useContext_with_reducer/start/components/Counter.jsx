import CounterResult from "./CounterResult"
import CounterButton from "./CounterButton"

const Counter = () => {
    return (
        <>
            <CounterResult/>
            <CounterButton step={2} calcType="+"/>
            <CounterButton step={2} calcType="-"/>
            <CounterButton step={100} calcType="+"/>
            <CounterButton step={100} calcType="-"/>
            <CounterButton step={200} calcType="+"/>
            <CounterButton step={200} calcType="-"/>
            <CounterButton step={1000} calcType="+"/>
            <CounterButton step={1000} calcType="-"/>
        </>
    )
}
export default Counter;