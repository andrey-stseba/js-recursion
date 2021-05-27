// Для рекурсивной функции возведения числа в степень pow(base, exponent) реализовать валидацию передаваемых значений и генерацию ошибок соостветствующих типов.
// Вызов функции заключить в блок try с отлавливанием исключительных ситуаций (ошибок) разных типов с оповещением пользователя о типе наступившей ошибки.

function pow(b, exp) {
  if (typeof b !== "number") {
    throw new TypeError("The argument must be number value");
  }
  if (typeof exp !== "number") {
    throw new TypeError("The argument must be number value");
  }

  if (exp % 1 !== 0 || exp < 1) {
    throw new RangeError(
      "The argument must be a non-negative integer and not zero"
    );
  }

  if (exp === 1) {
    return b;
  }

  return b * pow(b, exp - 1);
}

const userNumber = 2,
  exponent = 1.5;
// возведение в целую степень.
try {
  const returnsExponent = pow(userNumber, exponent);
  console.log("Exponentiation = ", returnsExponent);
} catch (e) {
  if (e instanceof TypeError) {
    alert("Input a number value please");
  }
  if (e instanceof RangeError) {
    alert("Input value between non-negative integer and not zero please");
  }
  throw e;
}
