const now = require('performance-now');

let t1, t2;
const show = () => {
  console.log(`${t2 - t1}`);
}

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += n;
  }
  return total;
}

t1 = now();
addUpTo(10000);
t2 = now();
show();
