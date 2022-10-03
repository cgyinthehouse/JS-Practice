// question 7
function inversePyramid(num) {
    for (let i = num; i > 0; i--) {
        let line = '';
        for (let k = 0; k <num - i; k++) {
            line += ' ';
        }
        for (let j = i * 2 - 1; j >= 1; j--) {
            line += '*';
        }
        console.log(line);
    }
}
inversePyramid(5);
inversePyramid(4);