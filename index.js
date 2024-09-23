// Exercise 1: Filtering an Array
// Problem: Write a function that takes an array of numbers
// and returns a new array containing only the even
// numbers.

function evenNumbers(array) {
  let newArray = array.filter((item) => item % 2 === 0);
  //   استخدام فيلتر واضافة شرط مايكونش في باقي قسما لما نقسم علي 2
  return newArray;
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6])); // outPut [2,4,6]

// Exercise: 2 Find the Largest Number
// Problem: Write a function that takes an array of numbers
// and returns the largest number in the array.

// steps
// 1 - catch num[index] > array loop if true push in new array else index + 1

function LargestNumber(array) {
  if (array.length === 0) return null;

  let intialValue = 0;
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    //  console.log(array[intialValue] + "|||||" + array[i]); // b3ml Test

    if (array[intialValue] > array[i + 1]) {
      newArray.push(array[intialValue]);
    } else {
      intialValue += 1;
    }
  }

  return [...new Set(newArray)]; // ast5dmt new Set 3l4an lw el rakm mtkrr;
}

console.log(LargestNumber([1, 2, 3, 6, 4, 5])); // 6

// Exercise: 3 Reverse a String
// Problem: Write a function that takes a string as input and
// returns the same string but reversed.
function ReverseString(str) {
  let array = Array.from(str);
  let arrayRef = array.reverse();

  return arrayRef.join("");
}

console.log(ReverseString("ahmed hassan")); // nassah demha

// Exercise: 4 Remove Duplicates
// Problem: Write a function that takes an array of numbers
// and returns a new array without duplicate numbers.

function RemoveDuplicates(array) {
  return [...new Set(array)];
}

console.log(RemoveDuplicates([1, 1, 2, 3, 4, 5])); // {1, 2, 3, 4, 5}
