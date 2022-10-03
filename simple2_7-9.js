// question 7
function reverse(text) {
    let result = '';
    for (let i = text.length - 1; i >= 0; i--) {
        result += text[i];
    }
    console.log(result);
}
reverse('this is a test.');
reverse('abcdefg');

// question 8
function swap(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let append = text[i] == text[i].toUpperCase() ? text[i].toLowerCase() : text[i].toUpperCase();
        result += append;
    }
    console.log(result);
}
swap('Aloha');
swap('Love you.');

// question 9
function findMin(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        min = arr[i] > min ? min : arr[i];
    }
    console.log(min);
}
findMin([]);
findMin([-1, 6, -9, 4, 3, -2, 5]);
findMin([4, 6, -10, 49, 3, 5]);
