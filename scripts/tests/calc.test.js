const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 73 for 42 + 31", () => {
            expect(addition(42, 31)).toBe(73);
        });
    });
    describe("Subtract function", () => {

    });
    describe("Multiply function", () => {

    });
    describe("Division function", () => {

    });
});

// think about what other tests need to be done to make the function robust,
// Below is a list of tests that could be done.
// Test for no parameters
// test for missing parameters
// a string as 1 or both parameters
//null as 1 or both parameters
//undefined as a parameter
//does it work with float point numbers
//does it work with negative numbers
//what about 3 or more parameters