function foo(a, b) {
  // Handle null values by providing default values or throwing an error
  a = a === null ? 0 : a; // use 0 as default value if null
  b = b === null ? 0 : b; // use 0 as default value if null
  return a + b;
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(10, null)); // Output: 10
console.log(foo(10, 5)); // Output: 15
console.log(foo(null, null)); // Output: 0