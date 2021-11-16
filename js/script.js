//task 1 indexOf
const array = [2, 3, 4, 5];
function indexOf (arr, arg) {
  for (let i = 0; i < arr.length - 1; i++) {
    if(arr[i] === arg) {
      return i;
    }
  }
  retrn -1;
}
console.log(indexOf(array, 4));
//task 2 lastIndexOf
const array2 = ["2", "3", "4", "5", "4"];
function lastIndexOf(arr, arg, fromIndex = null) {
  if(fromIndex === null) fromIndex = arr.length -1;
  for (let i = fromIndex; i >= 0; i--) {
    if(arr[i] === arg) {
      return i;
    }
  }
  retrn -1;
}
console.log(lastIndexOf(array2, "4"));
//task 3 find
const arr3 = [2, 3, 4, 5];
function checkNumber3( currentValue ) {
    return currentValue > 0; // проверяем является ли текущее значение меньше нуля
  }

function find(callback, array, index = 0, thisis = undefined) {
  for (let i = index; i < array.length; i++) {
  let call = callback(array[i]);
  if (call === true) {
    return array[i];
   }
  }
  return thisis;
}

console.log(find(checkNumber3, arr3, 2, "ups"));
//task 4 findIndex
const arr4 = [2, 3, 4, 5];
function checkNumber4( currentValue ) {
    return currentValue < 0;
  }

function findIndex(callback, array, index = 0, thisis = -1) {
  for (let i = index; i < array.length; i++) {
  let call = callback(array[i]);
  if (call === true) {
    return i;
   }
  }
  return thisis;
}
console.log(findIndex(checkNumber4, arr4));
//task 5 includes
const arr5 = [2, 3, 4, 5];
function includes(array, arg) {
  for (let i = 0; i < array.length; i++) {
    if(array[i] === arg) {
      return true;
     }
  }
  return false;
}
console.log(includes(arr5, 5), "includes");
//task 6 every
const arr6 = [2, -13, 4, 5];
function checkNumber6( currentValue ) {
    return currentValue > 0;
  }

function every(callback, array, index = 0, thiss = true) {
  if(array.length === 0) return true;
  for (let i = index; i < array.length; i++) {
  let call = callback(array[i]);
  if (call === false) {
    return false;
   }
  }
    return thiss;
}

console.log(every(checkNumber6, arr6), "every");
//task 7 some
const arr7 = [-2, -3, -4, -5];
function checkNumber7( currentValue ) {
    return currentValue > 0;
  }

function some(callback, array, index = 0, this7 = false) {

  for (let i = index; i < array.length; i++) {
  let call2 = callback(array[i]);
  if (call2 === true) {
    return true;
   }
  }
  return this7;
}

console.log(some(checkNumber7, arr7), "some");
