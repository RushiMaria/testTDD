// src/StringCalculator.ts

export class StringCalculator {
    private defaultDelimiters: string[] = [",", "\n"];

    public Add(numbers: string): number {
        if (numbers === "") {
            return 0;
        }

        // Check for custom delimiter
        let delimiters = this.defaultDelimiters;
        if (numbers.startsWith("//")) {
            const [delimPart, numPart] = this._parseCustomDelimiters(numbers);
            delimiters = delimPart;
            numbers = numPart;
        }

        // Split the numbers string based on the delimiters
        const numList = this._splitNumbers(numbers, delimiters);

        // Convert to integers and validate
        const intList = this._convertAndValidateNumbers(numList);

        // Return the sum of valid numbers
        return intList.reduce((sum, num) => sum + num, 0);
    }

    private _parseCustomDelimiters(numbers: string): [string[], string] {
        let delimiters: string[] = [];
        const endDelimIndex = numbers.indexOf("\n");
        const delimiterPart = numbers.substring(2, endDelimIndex);
        const remainingNumbers = numbers.substring(endDelimIndex + 1);

        if (delimiterPart.startsWith("[") && delimiterPart.endsWith("]")) {
            delimiters = delimiterPart.slice(1, -1).split("][");
        } else {
            delimiters = [delimiterPart];
        }

        return [delimiters, remainingNumbers];
    }

    private _splitNumbers(numbers: string, delimiters: string[]): string[] {
        const escapedDelimiters = delimiters.map(delim => delim.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')); // Escape for regex
        const splitPattern = new RegExp(escapedDelimiters.join("|"), "g");
        return numbers.split(splitPattern);
    }

    private _convertAndValidateNumbers(numList: string[]): number[] {
        const intList: number[] = [];
        const negatives: number[] = [];

        for (const num of numList) {
            if (num !== "") {
                const value = parseInt(num, 10);
                if (value < 0) {
                    negatives.push(value);
                } else if (value <= 1000) {
                    intList.push(value);
                }
            }
        }

        if (negatives.length > 0) {
            throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
        }

        return intList;
    }
}
