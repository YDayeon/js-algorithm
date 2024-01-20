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

console.log(fibonacci(7));
