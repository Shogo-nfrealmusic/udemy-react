const Example = () => {

  const num = { val:2 }
  const double = (num) => {
    const newNum = {};
    newNum.val = num.val * 2;
    return num;
  }
  const newNum = double(num);
  return (
    <>
      
    </>
  );
};

export default Example;
