// Code your solution here
findMatching = (names, name) => {
    return names.filter((allNames) => allNames.toLowerCase() === name.toLowerCase()
    );
}

function fuzzyMatch (names, testName) {
    return names.filter((nameMatch) => nameMatch.toLowerCase().indexOf(testName.toLowerCase()) === 0
    );
}

function matchName (name, hometown) {
    return name.filter((record) => record.name === hometown);
}