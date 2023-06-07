const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 73 for 42 + 31", () => {
            expect(addition(42, 31)).toBe(73);
        });
        test("should return NaN for no parameters", () => {
            expect(addition()).toBeNaN();
        });
        test("should return NaN for missing 1 parameter", () => {
            expect(addition(20)).toBeNaN();
        });
        test("should return NaN for string parameters", () => {
            expect(addition("20", "25")).toBeNaN();
        });
        test("should return NaN for mixed string and number parameters", () => {
            expect(addition("42", 31)).toBeNaN();
        });
        test("should return NaN for null parameters", () => {
            expect(addition(null, null)).toBeNaN();
        });
        test("should return NaN for mixed null and number parameters", () => {
            expect(addition(null, 31)).toBeNaN();
        });
        test("should return NaN for undefined parameters", () => {
            expect(addition(undefined, undefined)).toBeNaN();
        });
        test("should return NaN for mixed undefined and number parameters", () => {
            expect(addition(undefined, 31)).toBeNaN();
        });
        test("should return 8.6491 for 6.1379 + 2.5112", () => {
            expect(addition(6.1379, 2.5112)).toBe(8.6491);
        });
        test("should return 9.95354 for 7.96734 + 1.9862", () => {
            expect(addition(7.96734, 1.9862)).toBe(9.95354);
        });
        test("should return -2 for -6 + 4", () => {
            expect(addition(-6, 4)).toBe(-2);
        });
        test("should return -12 for -6 + -6", () => {
            expect(addition(-6, -6)).toBe(-12);
        });
        // test("should return 15 for 5 + 5 + 5", () => {        // do the same tests for each function before adding this test and ammending code
        //    expect(addition(5, 5, 5)).toBe(15);               // as to pass this test you need to use reduce and you need to understand that better yet.
        //});
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