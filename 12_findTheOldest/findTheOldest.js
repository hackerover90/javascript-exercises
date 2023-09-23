

const findTheOldest = function(arr) {

    return arr.reduce((oldest, currentPerson) => {
        const oldestAge = findAge(oldest);
        const currentAge = findAge(currentPerson);
        return oldestAge > currentAge ? oldest : currentPerson;
    });

    function findAge(element) {
        if (!element.yearOfDeath) {
            let today = new Date();
            let year = today.getFullYear();
            return year - element.yearOfBirth;
        } else {
            return element.yearOfDeath - element.yearOfBirth;
        }
    }
};

// Do not edit below this line
module.exports = findTheOldest;
