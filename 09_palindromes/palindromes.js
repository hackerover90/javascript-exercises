const palindromes = function (str) {
filteredStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
return filteredStr.split('').reverse().join('') == filteredStr;
};

// Do not edit below this line
module.exports = palindromes;
