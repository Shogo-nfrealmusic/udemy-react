import { useState } from "react";

const Example = () => {
  let [val, setVal] = useState();
  return (
    <>
      <input 
      type="text"
      onChange={(e) => {
        // const setFn = setVal;
        setVal(e.target.value);
        }} /> = {val}
    </>
  );
};

export default Example;
