// question 3
// flatten an array
// reference: https://medium.com/swlh/how-to-flatten-an-array-in-javascript-6b3fef075655

// solution 1 : Use a stack
function flatten(input) {
    const result = [];
    const stack = [...input] // copy the input array into a stack
    while (stack.length) {
        // We use push and pop, this is slightly more efficient than using shift and unshift, 
        // as those methods would force JS TO re-index the array after each iteration.
        const next = stack.pop();
        if (Array.isArray(next)) {
            // push back array items, won't modify the original input
            stack.push(...next);
        } else {
            result.push(next);
        }
    }
    console.log(result.reverse());
}

// solution 2 : Use function recursion
function flatten2(array) {
    let result = [];
    helper(array)
    console.log(result);
    return result;

    function helper(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                helper(arr[i]);
            } else {
                result.push(arr[i]);
            }
        }
    }
}
arr = [1, [[], 2, [0, [1]], [3]], [1, 3, [3], [4, [1]], [2]]];
flatten(arr);
flatten2(arr);


// reference: https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-steamroller/16079
// freeCodeCamp solutions - 1
function steamrollArray(arr) {
    const flattenedArray = [];
    // Loop over arry contents
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            // Recursively flatten entries that are arrays
            // and push into the flattenedArray
            flattenedArray.push(...steamrollArray(arr[i]));
        } else {
            // Copy contents that are not arrays
            flattenedArray.push(arr[i]);
        }
    }
    return flattenedArray;
};
console.log('steamrollArray: ', steamrollArray([1, [2], [3, [4]]]));


// freeCodeCamp solution - 2
function steamrollArray2(arr) {
    const flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray2(flat) : flat;

}
console.log('steamrollArray2: ', steamrollArray2([1, [2], [3, [4]]]));


// freeCodeCamp solution - 3 (turn array to string)
function steamrollArray3(arr) {
    return arr.toString()
        .replace(",,", ",")
        .split(",")
        .map(function (v) {
            if (v == "[object Object]") {
                // bring back empty objects
                return {};
            } else if (isNaN(v)) {
                // is not a number (string)
                return v;
            } else {
                return parseInt(v); // if a number in a string, convert it
            }
        })
}
console.log('steamrollArray3: ', steamrollArray3([1, ['2'], ['a', [4]]]));


// freeCodeCamp solution - 4 ( forEach)
function steamrollArray4(val, flatArr = []) {
    val.forEach(item => {
        if (Array.isArray(item)) steamrollArray4(item, flatArr);
        else flatArr.push(item);
    });
    return flatArr;
}
console.log('steamrollArray4: ', steamrollArray4([1, ['2', ['a', [4]]]]));


// freeCodeCamp solution - 5
function steamrollArray5(arr, flatArr = []) {
    const elem = arr.pop();
    return elem
        ? !Array.isArray(elem)
            ? steamrollArray5(arr, [elem, ...flatArr]) : steamrollArray5(arr.concat(elem), flatArr)
        : flatArr;
}
console.log('steamrollArray5: ', steamrollArray5([1, ['2'], ['a', [4]]]));