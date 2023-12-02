function repeatString (string, num) {
    outputString = [];
    if (num < 0) {return 'ERROR'} else {
    for (i=0; i<num; i++) {
        outputString.push(string);
    }
    return outputString.join("");
}
};

// Do not edit below this line
module.exports = repeatString;
