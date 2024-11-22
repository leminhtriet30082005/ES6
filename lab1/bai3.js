function combineArrays(arr1, arr2) {
    return [...arr1, ...arr2];
  }
  
  function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
    console.log(combineArrays([1, 2, 3], [4, 5, 6]));
  console.log(sumAll(1, 2, 3, 4, 5));
  