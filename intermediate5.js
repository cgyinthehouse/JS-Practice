// question 5
function palindrome(text) {
    let comp = '';
    for (let i = text.length - 1; i >= 0; i--) {
        comp += text.charAt(i);
    }
    return comp == text; 
}
console.log(palindrome('bearaeb'))
console.log(palindrome('Aloha, how are you today?'))
console.log(palindrome('whatever revetahw'))