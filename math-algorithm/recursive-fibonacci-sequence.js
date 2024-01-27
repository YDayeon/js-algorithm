// Big-O - O(n)
function recursiveFibonacci(n) {
  const fibonacciList = [0, 1];
  if (n < 2) return fibonacciList[n];
  let result = 1;

  for (let i = 0; i < n - 1; i++) {
    const prevValue = fibonacciList.length - 2;
    result = fibonacciList[prevValue] + result;
    fibonacciList.push(result);
  }

  return fibonacciList[fibonacciList.length - 1];
}

console.log(recursiveFibonacci(0));
console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(6));
