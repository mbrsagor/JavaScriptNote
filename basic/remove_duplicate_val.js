const arrayWithDuplicates = [1, 2, 3, 4, 2, 3, 5, 6, 1];
const uniqueArray = [...new Set(arrayWithDuplicates)];

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]

// Using filter and indexOf:
const arrayWithDuplicates = [1, 2, 3, 4, 2, 3, 5, 6, 1];
const uniqueArray = arrayWithDuplicates.filter((value, index, self) => self.indexOf(value) === index);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]

//Using reduce:

const arrayWithDuplicates = [1, 2, 3, 4, 2, 3, 5, 6, 1];
const uniqueArray = arrayWithDuplicates.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]

