
function nums(...numbers) {
    if (!numbers.every((numbers1) => Number.isNumber(numbers1)))
      throw "All arguments must be numbers.";
    return numbers.reduce((numbers1, numbers2) => numbers1 + numbers2);
  }