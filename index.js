
function addNums(...nums) {
    if (!nums.every((num) => Number.isNumber(num)))
      throw "All arguments must be numbers.";
    return nums.reduce((num1, num2) => num1 + num2);
  }