/*
Write a function called "isPrime" that takes an 
integer as input, and returns a boolean 
value that indicates if the input number is prime.  
*/

function isPrime(num) {
    if (num == 1) return false;
    for (let i = 2; i <= num; i++) {
        if (num % i == 0 && num !== i) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(91));
console.log(isPrime(100000));

// list prime numbers less than 100
let primes = '';
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        primes += (i + ' ');
    }
}
console.log(primes);