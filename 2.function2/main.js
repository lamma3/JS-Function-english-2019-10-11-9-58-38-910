function reverseString(message) {
    return message.split('')
        .reverse()
        .join('');
}

function palindrome(message) {
    return message === reverseString(message);
}
console.log(palindrome('hello')); // should return false
console.log(palindrome('abcba')); // should return true