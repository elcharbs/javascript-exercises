const palindromes = function (string) {
    string = string
    .replace(/[^\w\s\']|_/g,'')
    .replace(/\s+/g,"")
    .toLowerCase();
  stringArray = string.split('');
  reversedArray = string.split('').reverse();
  return stringArray.length === reversedArray.length && stringArray.every((value, index) => value === reversedArray[index]);
};

// Do not edit below this line
module.exports = palindromes;
