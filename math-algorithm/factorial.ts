// Big-O = O(n)
function factorial(num: number) {
  let result = 1;

  if (num === 0 || num === 1) return result;

  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
}

console.log(factorial(4));
