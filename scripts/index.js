// Keys are strings
const leetDictionary = {
    A: 4,
    E: 3,
    G: 6,
    I: 1,
    O: 0,
    S: 5,
    T: 7,
};

function transl33t(originalString) {
    let result = '';
    // Loop through each letters in originalString
    // If it's in the dictionary, and if it is, put its value in 'result'
    for (let i = 0; i < originalString.length; i++) {
        let theLetter = originalString[i].toUpperCase();
        // console.log(theLetter);
        // console.log(leetDictionary[theLetter]);
        if (leetDictionary[theLetter] !== undefined) {
            debugger;
            result += leetDictionary[theLetter];
        } else {
            // If it's not, just copy the letter into 'result'
            result += theLetter;
        }
    }
    return result;
}

const addressBook = {
    DigitalCrafts: {
        phone: '404-123-1234',
        address: '3423 Piedmont',
        city: 'Atlanta',
    },
    "Chris Aquiano": {
        phone: '404-999-1234',
        address: '3421 Piedmont',
        city: 'Atlanta',
    },
};