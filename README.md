# JavaScript Function with a subtle zero-handling bug

This repository demonstrates a common yet subtle bug in JavaScript functions involving the handling of zero values.

## The Bug
The provided `foo` function aims to add two numbers. However, it contains a bug in its handling of zero values. When either `a` or `b` is 0, it incorrectly returns 0, even if the other number is non-zero. This leads to unexpected behavior in calculations where 0 might be a valid input.

## Solution
The bug is resolved by removing the buggy condition, allowing the function to correctly handle cases where one or both inputs are zero.  The corrected function performs the addition correctly regardless of whether the inputs are zero or non-zero.

## How to run the code
1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in a text editor.
3. Execute the code using a JavaScript runtime (Node.js, browser's console, etc.).
4. Observe the difference in output between the buggy and corrected versions of the code.

This example highlights the importance of thoroughly testing edge cases and boundary conditions, particularly with numeric inputs and operations.