// Do you know what a factorial of a number is? You can get the factorial of a
// number by multiplying all the numbers less than or equal to that number. As
// an example, 5! (5 factorial), is equal to 5 X 4 X 3 X 2 X 1 = 120. Would you
// please write a solution for Robin that returns the factorial of that number?

const factorial = (number) => {
  if (number === 0) return 0;

  let initial = 1;
  for (let i = number; i > 0; i--) {
    initial *= i;
  }
  return initial;
}

factorial(0);
