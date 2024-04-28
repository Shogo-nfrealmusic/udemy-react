function print(callback) {
  const result = callback(3);
  console.log(result);
}

function fn(number) {
    return number * 2;
  }
  
  debugger;
  print(fn);