import { useState } from "react";
import "./Example.css";

const Example = () => {
  console.log('render');

  const [countA, setCountA] = useState(0);
  return (
    <>
      <div className="parent">
        <div>
          <h3>再レンダリング？</h3>
          <button onClick={() => {
            setCountA(1);
          }}>ボタンA
          </button>
        </div>
        <div>
          <p>ボタンAクリック回数:{countA}</p>
        </div>
      </div>
    </>
  );
};

export default Example;
