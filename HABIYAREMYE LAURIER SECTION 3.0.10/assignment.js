//Exercise 1: Arithmetic Operators

console.log(2 + 3 * 1);      // expected 7
console.log(2 ** 4);         // expected 16 (exponentiation)
console.log(5 / 1);          // expected 5
console.log(8 * 2 + 5 * 2);  // expected 39



//Exercise 2: Comparison Operators

console.log(4 * 5 == 20);    // true
console.log(6 * 5 === "30"); // false, but to make it true:
console.log(6 * 5 == "30");  // true (loose equality allows type coercion)
console.log(-17 < 0);        // true
console.log(25 > 1);         // true
console.log(2 + 2 * 2 > 4);  // true (2 + 4 = 6, which is greater than 4)



//Exercise 3: Logical Operators

console.log(true || false);              // true
console.log(false == false);             // true
console.log(false || false || true);     // true
console.log(true || false && false && true); // true (AND has higher precedence than OR)