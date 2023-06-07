function addition(num1, num2,) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return NaN;
    }
    return num1 + num2;
}
module.exports = addition;

//solution for last test on addition function below....
//function addition(...numbers) {
//    if (numbers.some((num) => typeof num !== "number")) {
//        return NaN;
//    }
//    return numbers.reduce((sum, num) => sum + num, 0);
//}