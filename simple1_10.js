// question 10
function sum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sum([1,2,3,4,5,6,7,8,9,10]));
console.log(sum([]));
console.log(sum([-10,-20,-30]));
