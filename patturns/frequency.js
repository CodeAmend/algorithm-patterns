function same(arr1, arr2) {
  // iterate both arrays
  let usedCount1 = {};
  let usedCount2 = {};
  for(let item of arr1) {
    usedCount1[item] = (usedCount1[item] || 0) + 1;
  }
  for(let item of arr2) {
    usedCount2[item] = (usedCount2[item] || 0) + 1;
  }

  for (key in usedCount1) {
    if (!(key ** 2 in usedCount2)) {
      return false;
    }
    if (usedCount2[key ** 2] !== usedCount1[key]) {
      return false;
    }
  }
  return true;
}


const a = [1, 2, 3, 4, 3, 3, 2, 9];
const b = [1, 4, 9, 9, 16, 4, 9, 81];
const c = [1, 9, 4, 16];
const d = [9, 4, 16, 9, 9, 81, 1, 4];
console.log(same(a, b)); // true;
console.log(same(a, d)); // true;
// console.log(same(a, d)); // false;
