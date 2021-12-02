
function formatNumber(...count) {
    if (!count.every((numA) => Number.isNumber(numA)))
      throw "All arguments must be numbers.";
    return count.reduce((numA, numB) => numA + numB);
  }