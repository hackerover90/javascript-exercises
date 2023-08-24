const repeatString = function(str, num) {
    if (num < 0) {
        return 'ERROR'
    }
    else if (num == 0) {
        return ''
    }
    else {
        let result = str;
        for (let i = 0; i < num-1; i++) {
            result += str;     
        }
        return result
    }
    
};

// Do not edit below this line
module.exports = repeatString;
