// question 4
function table(n) {
    for (let i = 1; i <= 9; i++) {
        console.log(`${n} x ${i} = ${i * n}`);
    }
}
table(3)

// question 5
function table9to9() {
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            console.log(`${i} x ${j} = ${j * i}`);
        }
    }
}
table9to9();

// question 6(1)
// using object
function fib1(n) {
    let fib = {
        0: 0,
        1: 1
    }
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n]
}
for (let i = 0; i <= 10; i++) {
    console.log(i + '. ', fib1(i));
}


// question 6(2)
// using array
function fib2(n) {
    let fib = [0,1]
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n]
}
for (let i = 0; i <= 10; i++) {
    console.log(`(${i})`, fib2(i));
}