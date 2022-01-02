function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === complement) return true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  array[0] + array[1] ; array[0] + array[2] ...
  array[1] + array[2] ; array[1] + array[3] ...

  if any of the pairs add up to the second arg, return true
  if not, return false
  
*/

/*
  Write function that accepts two arguments: 
    1) An array of integers
    2) An integer
  
  The function should determine whether any two of the ints in the array add up to the int provided as the second arg
*/

 //You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 20));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 28));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 9));
}

module.exports = hasTargetSum;