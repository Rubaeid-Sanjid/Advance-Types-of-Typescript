"use strict";
{
    // Type assertion
    const kgToGm = (value) => {
        if (typeof value === "string") {
            const convertedNum = parseFloat(value);
            return `The value is : ${convertedNum * 1000}`;
        }
        if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result1 = kgToGm("1000");
    const result2 = kgToGm(1000);
}
