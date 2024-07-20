function uniqueArray(arr) {
  const res = [];
  outter: for (const i of arr) {
    for (const j of res) {
      if (isEqual(j, i)) {
        continue outter;
      }
    }
    res.push(i);
  }
  return res;
}

function isObject(value) {
  return value === Object(value);
}

function isEqual(a, b) {
  if (!isObject(a) || !isObject(b)) {
    return Object.is(a, b);
  }
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }

  for ([key, value] of Object.entries(a)) {
    if (!(key in b)) {
      return false;
    }
    isEqual(value, b[key]);
  }
}

const arr = [1, 2, 3, 3, 3, 4];
const arr2 = [
  { a: 1, b: 1 },
  { a: 1, b: 1 },
];
const arr3 = [
  { a: 1, b: undefined },
  { a: 1, b: undefined },
];
const arr4 = [
  { a: 1, b: undefined },
  { a: 1, c: undefined },
];

// console.log("uniqueArray(arr)::", uniqueArray(arr));
// console.log("uniqueArray(arr2)::", uniqueArray(arr2));
// console.log("uniqueArray(arr3)::", uniqueArray(arr3));
console.log("uniqueArray(arr4)::", uniqueArray(arr4));
