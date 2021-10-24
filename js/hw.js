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
function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !start && !end; // Change this line
  console.log(!number);

  return isNotInRange;
}
isNumberNotInRange(10, 30, 17);
isNumberNotInRange(10, 30, 5);
isNumberNotInRange(20, 50, 24);
isNumberNotInRange(20, 50, 76);