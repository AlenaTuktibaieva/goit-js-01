// Task 1
// function checkAge(age) {
//   if (age >= 18) { // Change this line
//     console.log("You are an adult");
//     return;
//   }
//   console.log("You are a minor");
//   return;
// }

// checkAge(20);
// checkAge(8);
// checkAge(14);
// checkAge(38);

// Task 2
// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     // Change code below this line
  
//     if (password === ADMIN_PASSWORD) {
//       return "Welcome!";
//     } 
//       return "Access denied, wrong password!";
    
//     // Change code above this line
//   }

//     checkPassword("mangohackzor");
//     checkPassword("polyhax");
//     checkPassword("jqueryismyjam");

// Task 9
// function getExtremeElements(array) {
//     const result = [array[0], array[array.length - 1]];
//     console.log(result);
//     return result;
// }


// getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(["Earth", "Mars", "Venus"]);
// getExtremeElements(["apple", "peach", "pear", "banana"]);


// Task 10
// function splitMessage(message, delimeter) {
//     let words;
//     words = message.split(delimeter);
//     console.log(words);

//   return words;
// }
// splitMessage("Mango hurries to the train", " ");
// splitMessage("Mango", "");
// splitMessage("best_for_week", "_");


// Task 11
// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//     let words = message.split(" ");
//     let totalPrice = words.length * pricePerWord;
//     console.log(totalPrice);
//     return totalPrice;
//    // Change code above this line
// }
// calculateEngravingPrice("JavaScript is in my blood", 10);
// calculateEngravingPrice("JavaScript is in my blood", 20);
// calculateEngravingPrice("Web-development is creative work", 40);
// calculateEngravingPrice("Web-development is creative work", 20);


// Task 12
// function slugify(title) {
//   // Change code below this line
//     let result = title.toLowerCase().split(' ').join('-');
    
//     console.log(result);
//     return result;
//   // Change code above this line
// }
// slugify("Arrays for begginers");
// slugify("English for developer");
// slugify("Ten secrets of JavaScript");
// slugify("How to become a JUNIOR developer in TWO WEEKS");


// Task 14
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
//  console.log(lastThreeEls);


// Task 16
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//     let newArray = firstArray.concat(secondArray).slice(0, maxLength);

//     return newArray;
    
//     // Change code above this line
// }
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);


// Task 17
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }


// Task 18
// function calculateTotal(number) {
//  // Change code below this line
//     let total = 0;
//     for (let i = 0; i <= number; i++) {
//         total += i;
//         console.log(total);
//     }
//     return total;
//   // Change code above this line
// }
// calculateTotal(1);
// calculateTotal(3);
// calculateTotal(7);
// calculateTotal(18);
// calculateTotal(24);


// Task 19
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }


// Task 20
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//     for (i = 0; i < order.length; i += 1) {
//         total += order[i];
//         console.log(total);
//     }
//     // for (const orders of order) {
//     //     total += orders;
//     //     console.log(total);
//     // }

//   // Change code above this line
//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);


// Task 21
// function findLongestWord(string) {
//   // Change code below this line
//     const word = string.split(' ');
//     let longestWord = word[0];
//     for (let i = 0; i < word.length; i += 1) {
//         if (word[i].length > longestWord.length) {
//             longestWord = word[i];
//         }
//     }
        
//     console.log(longestWord);
    
//     return longestWord;
//   // Change code above this line
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("Google do a roll");
// findLongestWord("May the force be with you");


// Task 22
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//     for (let i = min; i <= max; i += 1) {
//         numbers.push(i);
//     }
//     console.log(numbers);

//   // Change code above this line
//   return numbers;
// }
// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);


// Task 23
// function filterArray(numbers, value) {
//    // Change code below this line
//     const filter = [];
//     for (let i = 0; i < numbers.length; i += 1) {
//         if (numbers[i] > value) {
//             filter.push(numbers[i]);
//         }
//     }
//     console.log(filter);

//     return filter;
//   // Change code above this line
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);


// Task 24
// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];
        
//         return fruits.includes(fruit);
//     }
//   ; // Change this line

// checkFruit("plum");
// checkFruit("mandarin");
// checkFruit("pear");
// checkFruit("Pear");
// checkFruit("apple");


// Task 25
function getCommonElements(array1, array2) {
  // Change code below this line
    let newArray = [];
    // for (const element of array1) {
    //     if (array2.includes(element)) {
    //         newArray.push(element);
    //     }
        
    // }
    // console.log(newArray);
    // return newArray;

    for (let i = 0; i < array1.length; i += 1) {
        
    }
 // Change code above this line
}
getCommonElements([1, 2, 3], [2, 4]);
getCommonElements([1, 2, 3], [2, 1, 17, 19]);
getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
getCommonElements([1, 2, 3], [10, 20, 30]);


// Task 26
// function calculateTotalPrice(order) {
//   let total = 0;const
//   // Change code below this line

//   for (const orders of order) {
//     total += orders;
//       console.log(total);
//   }

//   // Change code above this line
//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);
// calculateTotalPrice([]);


// Task 27
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const number of numbers) {

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//     }
//     console.log(filteredNumbers);

//   return filteredNumbers;
//   // Change code above this line
// }
// filterArray([1, 2, 3, 4, 5], 3);


// Task 29
// function getEvenNumbers(start, end) {
//    // Change code below this line
//   const number = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//     number.push(i);
//     }
      
//   }
//   return number;
//     // Change code above this line
//   }


// Task 32
// function includes(array, value) {
//   // Change code below this line
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value) {
//       return true;
//     }
//   }
//   return false;
//   // Change code above this line
// }