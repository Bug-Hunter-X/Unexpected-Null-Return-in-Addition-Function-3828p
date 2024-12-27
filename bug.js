function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  } else {
    return a + b;
  }
}

console.log(foo(null, 5)); // Output: null
console.log(foo(10, null)); // Output: null
console.log(foo(10, 5)); // Output: 15