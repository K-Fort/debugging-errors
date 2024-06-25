function average(list) {
    var sum = 0;
  
    for (var num of list) {
      //unexpected identifier error
      // ++ is incorrect, change it to +=
      sum += num;
    }
  
    return sum / list.length;
  };
  // Unexpected end of input syntax error
  // The function was not properly closed, we need to put the } bracket after return.
console.log(average([3, 5, 7]));