// question 10
// reference: https://www.section.io/engineering-education/sorting-algorithms-in-js/#sorting-algorithms
function findNthMin(arr, n) {

    //Outer pass
    for (let i = 0; i < arr.length; i++) {

        //Inner pass
        for (let j = 0; j < arr.length - i - 1; j++) {

            //Value comparison using ascending order

            if (arr[j + 1] < arr[j]) {
                //Swapping
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
            }
        }
        if (i == n){
            return arr[i-1];
        }
    };
};
console.log(findNthMin([8, 0, 9, -3, 4, -1, 2], 3));
console.log(findNthMin([1, 3, 7, 5, 9], 3));