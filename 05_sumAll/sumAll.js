const sumAll = function(num1, num2) {

    if (typeof num1 !== "number" || !Number.isInteger(num1) || num1 < 0) {
        return "ERROR"
    } else if (typeof num2 !== "number" || !Number.isInteger(num2) || num2 < 0) {
        return "ERROR"
    }

    let sum = 0

    function greater(num1, num2) {
        if (num2 > num1) {
            return num2
        } else {
            return num1
        }
    }

    function smaller(num1, num2) {
        if (num1 < num2) {
            return num1
        } else {
            return num2
        }
    }
    for (i = smaller(num1, num2); i <= greater(num1, num2); i++) {
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
