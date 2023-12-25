const fibonacci = function (num) {
    let sequence = [1, 1];
    let n = 1;
    if (num <= 0) {
      return "OOPS";
    }
    if (num <= 2) {
      return sequence[(num-1)];
    }
    while (sequence.length < num) {
      let newValue = sequence[n] + sequence[n-1];
      sequence.push(newValue);
      n++;
    } 
    return sequence[num - 1];
  };

// Do not edit below this line
module.exports = fibonacci;
