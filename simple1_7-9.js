// question 7
function findSmallCount(arr, num) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count = arr[i] < num ? count += 1 : count;
    }
    return count;
}
console.log(findSmallCount([1, 2, 3], 0));
console.log(findSmallCount([1, 2, 3, 4, 5], 5));


// question 8
function findSmallerTotal(arr, num) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total = arr[i] < num ? total += arr[i] : total;
    }
    return total;
}
console.log(findSmallerTotal([1, 2, 3], 3));
console.log(findSmallerTotal([1, 2, 3], 1));
console.log(findSmallerTotal([2, 3, 5, 8, 7], 999));
console.log(findSmallerTotal([2, 3, 5, 8, 7], 0));


// question 9
function findAllSmall(arr, num) {
    let smalls = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < num) {
            smalls.push(arr[i]);
        }
    }
    return smalls;
}
console.log(findAllSmall([1, 2, 3],10));
console.log(findAllSmall([1, 2, 3],2));
console.log(findAllSmall([1, 3, 5, 4, 2],4))