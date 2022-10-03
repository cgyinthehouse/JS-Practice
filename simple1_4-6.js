// https://yuhsien.notion.site/JS-Practice-a692c4dc450c476a8a7d9f8fe997deda#4bd380fd2791449ba0bc66afd54de8ad


// question 4
function isUpperCase(str) {
    if (str !== '') {
        return str[0] == str[0].toUpperCase();
    } else {
        return false;
    }
}
console.log(isUpperCase('Test'));
console.log(isUpperCase('tesT'));
console.log(isUpperCase(''));


// question 5
function isAllUpperCase(str) {
    let result = false;
    if (str !== '') {
        for (let i = 0; i < str.length; i++) {
            if (str[i] == str[i].toUpperCase()) {
                continue;
            } else {
                return result = false;
            }
        }
        result = true;
    }
    return result;
}
console.log(isAllUpperCase(''));
console.log(isAllUpperCase('ABCD'));
console.log(isAllUpperCase('AScb'));


// question 6
function position(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i].toUpperCase()) {
            return `${str[i]} ${i}`;
        }
    }
        return -1;
}
console.log(position('abcd'));
console.log(position('aBCd'));
console.log(position('abCd'))