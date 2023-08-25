const sumAll = function(a, b) {
    let sum = 0;
    if (a < 0 || typeof(a) !== 'number') {
        return "ERROR"
    }
    if (b < 0 || typeof(b) !== 'number') {
        return "ERROR"
    }
    if (a < b) {
        for (let i = a; i <= b; i++) {
            sum += i;
        }
        return sum
    }
    else {
        for (let i = b; i <= a; i++) {
            sum += i;
        }
        return sum
    }
};

// Do not edit below this line
module.exports = sumAll;
