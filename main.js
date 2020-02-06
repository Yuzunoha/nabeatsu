'use strict';

const isContains3 = num => {
  while (true) {
    if (num % 10 === 3) {
      return true;
    }
    num -= num % 10;
    num /= 10;
    if (num === 0) {
      break;
    }
  }
  return false;
};

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    // 3の倍数
    console.log(i + '!');
  } else if (isContains3(i)) {
    // 3を含む
    console.log(i + '!');
  } else {
    console.log(i);
  }
}
