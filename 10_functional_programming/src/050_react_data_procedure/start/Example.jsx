import { useState } from "react";

// /* 
/* 
POINT Reactでの状態管理(state)と処理(関数コンポーネント)の分離

関数型（純粋関数）
・fn(決まった引数) : propsとstateに依存
  -> 決まった戻り値 : JSX
*/
// // ・関数外の状態（データ）は参照・変更しない。
// 関数外に影響を及ぼさない。

const Example = () => {
  const [ state, setState ] = useState(0);
  const increment = () => {
    setState(state + 1);
  }
  return (
    <>
      <button onClick={increment}>+</button>
      <h3>{state}</h3>
    </>
  );
};

export default Example;
