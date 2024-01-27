// Big-O loop - O(sqrt(n)) : linear time complexity
const isPrime = (number) => {
  if (number < 2) return false;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
};

console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(4));
