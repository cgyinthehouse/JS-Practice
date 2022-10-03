// question 6
function pyramid(num) {
    for (let i = 1; i <= num; i++) {
        let line = '';
        for (let j = num - i; j >= 0; j--) {
            line += ' ';
        }
        for (let k = 1; k <= i * 2 - 1; k++) {
            line += '*';
        }
        console.log(line);
    }
}

pyramid(5);
pyramid(6);