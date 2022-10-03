// intermediate exervises II
// question 2
intersection = (arr1, arr2) => {
    let arr = [...arr1, ...arr2];
    let counter = {};
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (counter.hasOwnProperty(arr[i])) {
            result.push(arr[i]);
            counter[arr[i]] += 1;
        } else {
            counter[arr[i]] = 1;
        }
    }
    console.log(result);
    return result;
}
intersection([1, 3, 4, 6, 10], [5, 11, 4, 3, 100, 144, 0]);