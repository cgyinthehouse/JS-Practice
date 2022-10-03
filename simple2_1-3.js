// https://yuhsien.notion.site/JS-Practice-a692c4dc450c476a8a7d9f8fe997deda

// question 1
function stars(num) {
    for (let i = 1; i < num + 1; i++) {
        let line = '';
        for (let j = 0; j < i; j++) {
            line += '*';
        }
        console.log(line);
    }
}
stars(5);
stars(3);

// question 2
function makeStars(num) {
    let line = '*';
    for (let i = 2; i < num + 1; i++) {
        line += '\n';
        for (let j = 0; j < i; j++) {
            line += '*';
        }
    }
    console.log(line);
}
console.log('----------------------------')
makeStars(2);
makeStars(3);

// question 3
function stars2(num) {
    let upper = '';
    let lower = '';
    for (let i = 1; i < num + 1; i++) {
        if (i > 1) { upper += '\n' };
        for (let j = 0; j < i; j++) {
            upper += '*';
        }
    }
    for (let i = num - 1; i > 0; i--) {
        lower += '\n';
        for (let j = i; j > 0; j--) {
            lower += '*';
        }
    }
    console.log(upper + lower);
}
console.log('---------------');
stars2(5);
console.log('---------------');
stars2(3);