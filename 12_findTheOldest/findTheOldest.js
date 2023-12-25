const findTheOldest = function(people) {
    var currentTime = new Date();
    people.forEach(element => {
      if (typeof element.yearOfDeath === 'undefined') {
        element.age = currentTime.getFullYear() - element.yearOfBirth;
      } else {
      element.age =  element.yearOfDeath - element.yearOfBirth;
      }
    });
    people.sort((a, b) => b.age - a.age);
    return people[0];
  };

// Do not edit below this line
module.exports = findTheOldest;
