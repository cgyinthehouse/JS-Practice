// question 1
// This is not the best solution, casue we haven't learn algoritm and data structure yet.
function mySort(a) {
    let arr = [...a];
    function findMin(arr) {
        let min = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    }
    let sorted = [];
    while (arr.length > 0) {
        let min = findMin(arr);
        sorted.push(min);
        arr.splice(arr.indexOf(min), 1)
    }
    return sorted;
}
let arr1 = [3, 5, 0, 0.3, -5, 1.6];
console.log(mySort([4, 3, 5, 2, 0, -5, 8, -3]));
console.log(mySort(arr1));
console.log(arr1);