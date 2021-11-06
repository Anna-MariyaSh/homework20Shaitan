//task 1 indexOf
// const array = [2, 3, 4, 5];
// function indOf (arr, arg) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if(arr[i] === arg) {
//       return i;
//     }
//   }
//   retrn -1;
// }
// console.log(indOf(array, 4));
//task 2 lastIndex
// const array = ["2", "3", "4", "5", "4"];
// function lastIndOf(arr, arg, fromIndex = null) {
//   if(fromIndex === null) fromIndex = arr.length -1;
//   for (let i = fromIndex; i >= 0; i--) {
//     if(arr[i] === arg) {
//       return i;
//     }
//   }
//   retrn -1;
// }
// console.log(lastIndOf(array, "4"));
//task 3 find
// const arr = [-2,-3, -4, -5];
// function checkNumber( currentValue ) {
//     return currentValue > 0; // проверяем является ли текущее значение меньше нуля
//   }
//
// function mainFunction(callback, array, index = 0, thisis = undefined) {
//   for (let i = index; i < array.length; i++) {
//   let call = callback(array[i]);
//   if (call === true) {
//     return array[i];
//   } else {
//     return thisis;
//    }
//   }
// }
//
// console.log(mainFunction(checkNumber, arr, 2, "ups"));
//task 4 findIndex
// const arr = [2, 3, 4, 5];
// function checkNumber( currentValue ) {
//     return currentValue > 0; // проверяем является ли текущее значение меньше нуля
//   }
//
// function mainFunction(callback, array, index = 0, thisis = -1) {
//   for (let i = index; i < array.length; i++) {
//   let call = callback(array[i]);
//   if (call === true) {
//     return i;
//   } else {
//     return thisis;
//    }
//   }
// }
// console.log(mainFunction(checkNumber, arr));
//task 5 findIndex
// const arr = [2, 3, 4, 5];
// function includes(array, arg) {
//   for (let i = 0; i < array.length; i++) {
//     if(array[i] === arg) {
//       return true;
//      }
//   }
//   return false;
// }
// console.log(includes(arr, 5));
//task 6 every
// const arr = [2, 3, 4, 5];
// function checkNumber( currentValue ) {
//     return currentValue > 0; // проверяем является ли текущее значение меньше нуля
//   }
//
// function mainFunction(callback, array, index = 0, thisis = false) {
//   if(array.length === 0) return true;
//   for (let i = index; i < array.length; i++) {
//   let call = callback(array[i]);
//   if (call === true) {
//     return true;
//   } else {
//     return thisis;
//    }
//   }
// }
//
// console.log(mainFunction(checkNumber, arr));
//task 6 every
const arr = [-2, -3, 4, -5];
function checkNumber( currentValue ) {
    return currentValue > 0; // проверяем является ли текущее значение меньше нуля
  }

function mainFunction(callback, array, index = 0, thisis = false) {
  if(array.length === 0) return false;
  for (let i = index; i < array.length; i++) {
  let call = callback(array[i]);
  if (call === true) {
    return true;
   }
  }
  return thisis;
}

console.log(mainFunction(checkNumber, arr));
