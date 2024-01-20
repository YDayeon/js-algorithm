// Big-O loop - O(n) : linear time complexity
function fibonacci(n) {
  const resultLength = n - 2;
  let result = [0, 1];

  for (let i = 0; i < resultLength; i++) {
    const firstPreviousNum = result[result.length - 2];
    const secondPreviousNum = result[result.length - 1];
    result.push(firstPreviousNum + secondPreviousNum);
  }
  return result;
}

console.logfibonacci(7);
