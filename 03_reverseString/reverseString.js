const reverseString = function(word) {
    let reverse_word = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reverse_word += word[i];
    }
    return reverse_word
};

// Do not edit below this line
module.exports = reverseString;
