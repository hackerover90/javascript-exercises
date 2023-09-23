const fibonacci = function(fibNum) {
    if (+fibNum == 1 || +fibNum == 0) {
        return +fibNum;
    } else if (fibNum < 0) {
        return 'OOPS';
    } else {
        return fibonacci(+fibNum-1) + fibonacci(+fibNum-2);
    }

    
};

// Do not edit below this line
module.exports = fibonacci;
