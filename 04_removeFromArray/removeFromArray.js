const removeFromArray = function(array, ...theArgs) {
    let new_array = [];
    array.forEach(element => {
        if (!theArgs.includes(element)) {
            new_array.push(element)
        }
    });
    return new_array
};

// Do not edit below this line
module.exports = removeFromArray;
