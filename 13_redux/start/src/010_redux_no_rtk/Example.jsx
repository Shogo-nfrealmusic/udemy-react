import Counter from "./components/Counter";
import { CounterProvider } from "./context/CounterContext";
import { Provider } from "react-redux";

const Example = () => {
  return (
    <Provider>
      <Counter />
    </Provider>
  );
};

export default Example;
