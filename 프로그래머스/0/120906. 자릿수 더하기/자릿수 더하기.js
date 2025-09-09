function solution(n) {
  let sum = 0;
  let a = 0;
  for (; n >= 1; n = Math.trunc((n = n / 10))) {
    a = n % 10;
    sum += a;
  }
  return sum;
}

