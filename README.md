# String Calculator TDD Kata

## Project Description

The String Calculator is a simple Node.js tool that adds numbers provided in a string format. It handles various formats and delimiters, making it a flexible solution for parsing and summing numbers. 
This project is implemented in TypeScript by following best practices of TDD and showcases clean, robust code with proper error handling.

## Features

1. Basic Input Handling: Adds up to two numbers separated by a comma.
   - Examples: `""` returns `0`, `"1"` returns `1`, `"1,2"` returns `3`.

2. Multiple Numbers: Supports an unknown number of numbers separated by commas.
   - Example: `"1,2,3"` returns `6`.

3. New Line as Delimiter: Allows new lines between numbers in addition to commas.
   - Example: `"1\n2,3"` returns `6`.

4. Custom Delimiters: Supports custom delimiters defined at the start of the string.
   - Example: `"//;\n1;2;3"` returns `6`.

5. Negative Numbers: Throws an exception with a detailed message for negative numbers.
   - Example: `"1,-2,3"` throws an exception `Negatives not allowed: -2`.

6. Ignoring Large Numbers: Numbers larger than 1000 are ignored in the sum.
   - Example: `"2,1001"` returns `2`.

7. Variable Length Delimiters: Handles delimiters of any length.
   - Example: `"//[*]\n1*2*3"` returns `6`.

8. Multiple Delimiters: Supports multiple custom delimiters.
   - Example: `"//[*][%]\n1*2%3"` returns `6`.

9. Complex Multiple Delimiters: Supports multiple delimiters with varying lengths.
   - Example: `"//[*][%%]\n1*2%%3"` returns `6`.

## How to Run the Project

### Prerequisites

Make sure you have Node.js and npm installed on your system. If you don't have them, you can download and install from [Node.js official website](https://nodejs.org/).

### Steps to Run

1. Clone the Repository:

   Clone this repository to your local machine using the following command:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the Project Directory:

   Change into the project directory:
   ```bash
   cd string-calculator
   ```

3. Install Dependencies:

   Install the required dependencies using npm:
   ```bash
   npm install
   ```

4. Build and Start the Project:

   Run the project using npm start:
   ```bash
   npm start
   ```

   This command will compile the TypeScript files and then run the `index.js` file located in the `dist` directory.

### Project Structure

- src/: Contains the TypeScript source files.
  - `StringCalculator.ts`: The main logic for the String Calculator.
  - `index.ts`: The entry point script with test cases.
- node_modules/: Directory for project dependencies.
- .gitignore: Specifies files and directories to be ignored by Git.
- package.json: Contains project metadata and configuration for npm.
- tsconfig.json: Configuration file for the TypeScript compiler.

### Example Usage

To see the String Calculator in action, run the project and observe the console output for the provided test cases in `index.ts`.

```bash
npm start
```

This will execute the String Calculator and output the results to the console.
