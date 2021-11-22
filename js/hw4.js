// Task 1
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = (makePizza());
// const pointer = (makePizza);


// Task 2
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//     const message = callback(pizzaName);
//   return message;
  
// }

// makeMessage("Royal Grand", makePizza);
// makeMessage("Ultracheese", deliverPizza);


// Task 3
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName){
//   console.log(`Eating pizza ${pizzaName}.`);
// });


// Task 4
// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     const {pizzas} = this
//     for (const pizza of pizzas) {
//       if (pizza === pizzaName) {
//         return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//       }
//     }
//     return `Error! There is no pizza with a name ${pizzaName} in the assortment.`;
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);


// Task 5 
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
//   orderedItems.forEach(function (orderedItems) {
//      totalPrice += orderedItems;
//   });

//   // Change code above this line
//   return totalPrice;
// }


// Task 6 
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line
//   numbers.forEach(item => {
//     if (item > value) {
//       filteredNumbers.push(item);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }


// Task 7
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line
//     firstArray.forEach(number => {
//         if (secondArray.includes(number)) {
//             commonElements.push(number);
//         }
//     });

//   return commonElements;
//   // Change code above this line
// }


// Task 8
// Change code below this line

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Change code above this line
//   return quantity * pricePerItem;
// }


// Task 9
// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// // Change code above this line


// Task 10
// // Change code below this line
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// // Change code above this line
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);


// Task 11
// Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);


// Task 13
// function changeEven(numbers, value) {
//   // Change code below this line
//   const newNumbers = [];
//   numbers.forEach(element => {
//     element % 2 === 0 ? newNumbers.push(element + value) : newNumbers.push(element);
//   });
  
//   return newNumbers;
//   // Change code above this line
// }
// changeEven([1, 2, 3, 4, 5], 10);
// changeEven([2, 8, 3, 7, 4, 6], 10);
// changeEven([17, 24, 68, 31, 42], 100);
// changeEven([44, 13, 81, 92, 36, 54], 100);




