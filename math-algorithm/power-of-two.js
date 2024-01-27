// Big-O loop - O(n) : linear time complexity
const isPowerOfTwo = (number) => {
  if (number === 1) return true;
  if (number % 2 === 1) return false;

  return true;
};

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));
