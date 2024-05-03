const Example = () => {
  const clickHandler = () => {
    alert('click');
  }
  const clickHandler2 = () => {
    alert('billionaire');
  }
  return (
    <>
      <button onClick={clickHandler}>Click!</button>
      <button onClick={clickHandler2}>Click!</button>
    </>
  );
};

export default Example;
