function maxSubarraySum(arr, num) {
  let iteration = 0;
  if (num > arr.length) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      iteration++;
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return { max, iteration };
}

function maxSubarraySumBetter(arr, num) {
  let iteration = 0;
  let max = 0;
  let currentValue = 0;

  for (let i = 0; i < num; i++) {
    currentValue += arr[i];
  }

  for (let i = 1; i < arr.length - num + 1; i++) {
    iteration++;
    const prev = arr[i - 1];
    const next = arr[i + num - 1];
    currentValue = currentValue - prev + next;
    max = Math.max(max, currentValue);
  }

  return { max, iteration };
}


const arrayOfNums = [0,2,3,5,7,3,-5,3,-6,0];

console.log('simple', maxSubarraySum(arrayOfNums, 2));
console.log('better', maxSubarraySumBetter(arrayOfNums, 2));
