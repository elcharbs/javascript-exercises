const reverseString = function(string) {
    let letters = string.split('');
    let reversedArray = [];
    for (i = letters.length; i >= 0; i--) {
        reversedArray.push(letters[i]);
    }
    return reversedArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
