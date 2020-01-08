// [-2, 1, 2, 3] returns -2 and 2
function sumZero(sortedArray) {
  console.log('Basic');
  let iteration = 0;
  let result = [];
  const { length } = sortedArray;

  loop:
  for(let i = 0; i < length; i++) {
    for(let j = length-1; j > -1; j--) {
      iteration++
      const n1 = sortedArray[i];
      const n2 = sortedArray[j];
      if (n1 + n2 === 0) {
        result = [n1, n2]
        break loop;
      }
    }
  }

  return { result, iteration };
}

function sumZeroBetter(sortedArray) {
  console.log('Better');
  let iteration = 0;
  let result;
  let left = 0;
  let right = sortedArray.length - 1;

  while(left < right) {
    iteration++;
    const n1 = sortedArray[left];
    const n2 = sortedArray[right];
    const sum = n1 + n2;
    if (sum === 0) {
      result = [n1, n2];
      break;
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }

  return { result, iteration };
}

function countUniqueValues(sortedArray) {
  let iteration = 0;
  let count = 0;
  const uniqueValues = {};
  
  for(let item of sortedArray) {
    iteration++;
    if (!uniqueValues[item]) {
      uniqueValues[item] = true;
      count++; 
    }
  }
  return { count, iteration };
}

function countUniqueValuesBetter(sortedArray) {
  let iteration = 0;
  let count = 0;
  const uniqueValues = {};

  let left = 0;
  let right = sortedArray.length - 1;

  while(left < right) {
    iteration++;
    const p1 = sortedArray[left];
    const p2 = sortedArray[right];

    if (!uniqueValues[p1]) {
      uniqueValues[p1] = p1;
      count++;
    }

    if (!uniqueValues[p2]) {
      uniqueValues[p2] = p2;
      count++;
    }

    if (p1 + p2 === 0) {
      right--;
    } else if (p1 + p2 > 0) {
      // less
      left++;
    } else {
      right--;
    }
  }
  return { count, iteration };
}

function countUniqueValuesBest(sArray) {
  // Only best if array can be mutated
  let iteration = 0;
  let p1 = 0;
  for(let p2 = 1; p2 < sArray.length; p2++) {
    iteration++;
    if(sArray[p1] !== sArray[p2]) {
      p1++;
      sArray[p1] = sArray[p2];
    }
  }

  return { count: p1 + 1, iteration };
}

const sortedArray = [-2,-1,-1,0,1, 1, 1, 1];
// console.log(sumZero(sortedArray));
// console.log(sumZeroBetter(sortedArray));
// console.log(countUniqueValues(sortedArray));
// console.log(countUniqueValuesBetter(sortedArray));
console.log(countUniqueValuesBest(sortedArray));
