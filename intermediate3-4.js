// question 3
function confirmEnding(str1, str2) {
    let confirmation = str2 == str1.slice(str1.length - str2.length);
    console.log(confirmation);
}
confirmEnding("Bastian", "n"); // true
confirmEnding("Connor", "n"); // false
confirmEnding("Open sesame", "same"); // true


// question 4
function findDuplicate(arr) {
    let obj = new Object();
    for (let i in arr) {
        obj[arr[i]] = 0
    }
    for (let i in arr) {
        obj[arr[i]] += 1
        if(obj[arr[i]]>1){
            return true;
        }
    }
    return false;
}
console.log(findDuplicate([1, 3, 5, 7, 9, 3]))
console.log(findDuplicate([1, 3, 5, 7, 9]))
console.log(findDuplicate([]))