function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; //This is the buggy line
  }
  return a + b; 
}