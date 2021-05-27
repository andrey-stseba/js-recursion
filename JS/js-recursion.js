"use strict";
/**************************************************************************************/
//1. Реализовать возведение в целую степень. (pow(base, exponent) => base**exponent, где base любое число, exponent - натуральное (1, 2, 3) или * целое число(-2, -1, 0, 1, 2)).

//exponent - натуральное (1, 2, 3)
/**
 *
 * @param {Number} b -любое число возводимое в степень
 * @param {Number} exp -степень в котрую возводят число (натуральное число (1, 2, 3))
 * @returns {Number} число возведенное в степень exp
 */
function pow(b, exp) {
  if (exp === 1) {
    return b;
  }

  return b * pow(b, exp - 1);
}

const userNumber = Number(
    prompt("Введите число, которое возведется в степень")
  ),
  exponent = Number(
    prompt("Введите степень в которую необходимо возсети число")
  );
// возведение в целую степень.
exponent % 1 !== 0 || exponent < 1
  ? alert(
      `Степень ${exponent} не поддерживается, используйте пожайлуста натуральное число (это 1, 2, 3 и т.д.)`
    )
  : alert(
      `Число ${userNumber} в ${exponent} степени = ${pow(userNumber, exponent)}`
    );

/**************************************************************************************/
//2. Реализовать вывод в консоль скобок (// bracketWrapper3(3); // => сразу в консоль)

function consoleLogBracket(n) {
  function bracketWrapper(n) {
    return n === 1 ? "()" : `(${bracketWrapper(n - 1)})`;
  }
  console.log(`Вывод в консоль скобок ${bracketWrapper(n)}`);
}
consoleLogBracket(3);
