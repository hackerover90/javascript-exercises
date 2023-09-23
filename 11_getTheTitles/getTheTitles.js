const getTheTitles = function(arr) {
let newArr = [];
arr.forEach(obj => {
    newArr.push(obj.title);
});
return newArr;
};

// Do not edit below this line
module.exports = getTheTitles;
