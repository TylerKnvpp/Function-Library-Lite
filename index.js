let array = [1, 2, 3, 4, 5, 6];

// EACH
function myEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    callback(element);
  }
}

function square(e) {
  return e * e;
}

function log(e) {
  console.log(e);
}

function even(e) {
  if (e % 2 == 0) {
    return true;
  }
}

function greaterThan(e) {
  if (e > 3) {
    return true;
  }
}

// MAP
function myMap(arr, callback) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    newArray.push(callback(element));
  }
  return newArray;
}

// FILTER
function myFilter(arr, callback) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (callback(element) == true) {
      newArray.push(element);
    }
  }
  return newArray;
}

// FIND
function myFind(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (callback(element) == true) return element;
  }
}
