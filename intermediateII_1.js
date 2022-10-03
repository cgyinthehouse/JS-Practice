// intermediate exercises II
// question 1
factorPrime = num => {
    if (num <= 1) {
        console.log('please enter a number greater than 1');
        return;
    }
    const n = num + 0;
    let x = 2;
    let primes = [];
    while (x < num) {
        if (num % x !== 0) {
            x++;
        } else {
            num /= x;
            primes.push(x);
        }
    }
    primes.push(x);
    console.log(n + ' = ' + primes.join(' x '));
}
factorPrime(130);
factorPrime(120);
factorPrime(356);
factorPrime(3);