const getTheTitles = function(bookList) {
    let titles = [];
    bookList.forEach(item => {
        titles.push(item.title);
    });
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
