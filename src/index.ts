// src/index.ts

import { StringCalculator } from './StringCalculator';

const calculator = new StringCalculator();

// Test cases
console.log(calculator.Add(""));              // Output: 0
console.log(calculator.Add("1"));             // Output: 1
console.log(calculator.Add("1,2"));           // Output: 3
console.log(calculator.Add("1\n2,3"));        // Output: 6
console.log(calculator.Add("//;\n1;2;3"));    // Output: 6
console.log(calculator.Add("1001,2"));        // Output: 2
console.log(calculator.Add("//[***]\n1***2***3")); // Output: 6
console.log(calculator.Add("//[*][%]\n1*2%3")); // Output: 6
console.log(calculator.Add("//[***][%%]\n1***2%%3")); // Output: 6

// Testing for negatives - This will raise an exception
try {
    console.log(calculator.Add("1,-2,3"));
} catch (e) {
    if (e instanceof Error) {
        console.log(e.message); // Output: Negatives not allowed: -2
    } else {
        console.log("An unknown error occurred.");
    }
}

try {
    console.log(calculator.Add("//[***]\n1***-2***-3"));
} catch (e) {
    if (e instanceof Error) {
        console.log(e.message); // Output: Negatives not allowed: -2, -3
    } else {
        console.log("An unknown error occurred.");
    }
}
