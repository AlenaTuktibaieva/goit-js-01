// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//     if (available >= ordered) {
//         message = `Order is processed, our manager will contact you.`;
//     } else {
//         message = `Not enough goods in stock!`;
//     }
//     console.log(message);

//   // Change code above this line
//   return message;
// }
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(200, 20);
// checkStorage(200, 150);
// checkStorage(150, 180);

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// console.log(a);
// b -= 4;
// console.log(b);
// c *= 3;
// console.log(c);
// d /= 10;
// console.log(d);

// Задача 18
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//     const totalPrice = pricePerDroid * orderedQuantity;
//     const creditsLeft = customerCredits - totalPrice;
//     if (totalPrice > customerCredits) {
//         message = `Insufficient funds!`;
//     } else {
//         message = `You ordered ${orderedQuantity} droids, you have ${creditsLeft} credits left`;
//     }
    
//     console.log(message);

//   // Change code above this line
//   return message;
// }
// makeTransaction(3000, 5, 23000);
// makeTransaction(1000, 3, 15000);
// makeTransaction(5000, 10, 8000);
// makeTransaction(2000, 8, 10000);
// makeTransaction(500, 10, 5000);

// Задача 20
// function checkStorage(available, ordered) {
//     let message;
//   // Change code below this line
//     if (ordered === 0) {
//         message = `There are no products in the order!`;
//     } else if (ordered > available) {
//         message = `Your order is too large, there are not enough items in stock!`;
//     } else {
//         message = `The order is accepted, our manager will contact you`;
//     }
    
//     console.log(message) 
    
//   // Change code above this line
//     return message;
// }
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);

// Задача 21
// function isNumberInRange(start, end, number) {
//     const isInRange = start <= number && end >= number; // Change this line
//     console.log(isInRange);

//   return isInRange;
// }
// isNumberInRange(10, 30, 17);
// isNumberInRange(10, 30, 5);
// isNumberInRange(20, 50, 24);
// isNumberInRange(20, 50, 76);

// Задача 22
// function checkIfCanAccessContent(subType) {
//     const canAccessContent = subType === 'pro' || subType === 'vip'; // Change this line
//     console.log(canAccessContent);

//   return canAccessContent;
// }
// checkIfCanAccessContent("pro");
// checkIfCanAccessContent("starter");
// checkIfCanAccessContent("vip");
// checkIfCanAccessContent("free");

// Задача 23
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line
//   console.log(!number);

//   return isNotInRange;
// }
// isNumberNotInRange(10, 30, 17);
// isNumberNotInRange(10, 30, 5);
// isNumberNotInRange(20, 50, 24);
// isNumberNotInRange(20, 50, 76);

// Задача 24
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//   }
//   console.log(discount);

//   // Change code above this line
//   return discount;
// }
// getDiscount(137000);
// getDiscount(46900);
// getDiscount(8250);
// getDiscount(1300);
// getDiscount(5000);
// getDiscount(20000);
// getDiscount(50000);

// Part 2
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
//     let newArray = firstArray.concat(secondArray);
//     console.log(newArray.slice(0, maxLength));
//     return newArray.slice(0, maxLength);

//     return newArray;
    
//     // Change code above this line
// }
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);